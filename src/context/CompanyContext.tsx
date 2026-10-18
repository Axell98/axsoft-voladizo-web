"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { getCompany, resolveMediaUrl, type CompanyData } from "@/lib/api";
import { SITE_CONTACT, SITE_SOCIALS, SITE_NAME } from "@/lib/site";

export interface CompanyContextValue {
  company: {
    name: string;
    legalName: string;
    ruc: string;
    slogan: string;
    description: string;
    logoUrl: string | null;
    faviconUrl: string | null;
  };
  contact: {
    address: string;
    phone: string;
    phoneHref: string;
    email: string;
    email2: string | null;
    whatsapp: string;
    whatsappHref: string;
    hours: string;
    mapsUrl: string;
    mapsDirectionsUrl: string;
    mapsEmbedSrc: string;
  };
  social: {
    instagram: string | null;
    facebook: string | null;
    tiktok: string | null;
    youtube: string | null;
    linkedin: string | null;
    website: string | null;
  };
  raw: CompanyData | null;
  loading: boolean;
}

const defaultContextValue: CompanyContextValue = {
  company: {
    name: SITE_NAME,
    legalName: "Voladizo S.A.C.",
    ruc: "20744530134",
    slogan: "Arquitectura y Construcción",
    description: "",
    logoUrl: "/images/iconos/logo2.svg",
    faviconUrl: "/images/iconos/logo2.svg",
  },
  contact: {
    address: SITE_CONTACT.address,
    phone: SITE_CONTACT.phone,
    phoneHref: SITE_CONTACT.phoneHref,
    email: SITE_CONTACT.email,
    email2: null,
    whatsapp: "+51 999 449 230",
    whatsappHref: "https://wa.me/51999449230",
    hours: SITE_CONTACT.hours,
    mapsUrl: "https://maps.app.goo.gl/9sGuUStQbt1NNL1f6",
    mapsDirectionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE_CONTACT.address)}`,
    mapsEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(SITE_CONTACT.address)}&output=embed`,
  },
  social: {
    instagram: SITE_SOCIALS.instagram,
    facebook: SITE_SOCIALS.facebook,
    tiktok: SITE_SOCIALS.tiktok,
    youtube: null,
    linkedin: null,
    website: "https://voladizo.pe",
  },
  raw: null,
  loading: false,
};

const CompanyContext = createContext<CompanyContextValue>(defaultContextValue);

export function CompanyProvider({
  children,
  initialData = null,
}: {
  children: React.ReactNode;
  initialData?: CompanyData | null;
}) {
  const [data, setData] = useState<CompanyData | null>(initialData);
  const [loading, setLoading] = useState<boolean>(!initialData);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const fresh = await getCompany();
        if (mounted && fresh) {
          setData(fresh);
        }
      } catch (err) {
        console.warn("[CompanyContext] Error al cargar datos dinámicos:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const value = useMemo<CompanyContextValue>(() => {
    const rawContact = data?.contact;
    const rawSocial = data?.social;

    const address = rawContact?.address?.trim() || SITE_CONTACT.address;
    const phone = rawContact?.phone?.trim() || SITE_CONTACT.phone;
    const rawPhoneDigits = phone.replace(/[^0-9+]/g, "");
    const phoneHref = rawPhoneDigits.startsWith("+")
      ? `tel:${rawPhoneDigits}`
      : `tel:+${rawPhoneDigits}`;

    const whatsapp = rawContact?.whatsapp?.trim() || rawContact?.phone?.trim() || "+51 999 449 230";
    const waDigits = whatsapp.replace(/[^0-9]/g, "");
    const whatsappHref = `https://wa.me/${waDigits}`;

    const email = rawContact?.email?.trim() || SITE_CONTACT.email;
    const hours = rawContact?.business_hours?.trim() || SITE_CONTACT.hours;
    const mapsUrl = rawContact?.maps_url?.trim() || `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

    return {
      company: {
        name: data?.name?.trim() || SITE_NAME,
        legalName: data?.legal_name?.trim() || "Voladizo S.A.C.",
        ruc: data?.ruc?.trim() || "20744530134",
        slogan: data?.slogan?.trim() || "Arquitectura y Construcción",
        description: data?.description?.trim() || "",
        logoUrl: data?.logo_url ? resolveMediaUrl(data.logo_url) : "/images/iconos/logo2.svg",
        faviconUrl: data?.favicon_url ? resolveMediaUrl(data.favicon_url) : "/images/iconos/logo2.svg",
      },
      contact: {
        address,
        phone,
        phoneHref,
        email,
        email2: rawContact?.email_2?.trim() || null,
        whatsapp,
        whatsappHref,
        hours,
        mapsUrl,
        mapsDirectionsUrl,
        mapsEmbedSrc,
      },
      social: {
        instagram: rawSocial?.instagram?.trim() || SITE_SOCIALS.instagram,
        facebook: rawSocial?.facebook?.trim() || SITE_SOCIALS.facebook,
        tiktok: rawSocial?.tiktok?.trim() || SITE_SOCIALS.tiktok,
        youtube: rawSocial?.youtube?.trim() || null,
        linkedin: rawSocial?.linkedin?.trim() || null,
        website: rawSocial?.website?.trim() || "https://voladizo.pe",
      },
      raw: data,
      loading,
    };
  }, [data, loading]);

  return (
    <CompanyContext.Provider value={value}>
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompany(): CompanyContextValue {
  return useContext(CompanyContext);
}
