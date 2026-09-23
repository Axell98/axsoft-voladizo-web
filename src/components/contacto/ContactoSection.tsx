"use client";

import { useActionState, useState } from "react";
import { enviarContacto } from "@/features/contacto/actions";
import { contactoInitialState } from "@/features/contacto/types";
import { SITE_CONTACT } from "@/lib/site";
import { revealProps, useReveal } from "@/lib/use-reveal";

// =========================================================
// ICONOS SVG
// =========================================================
type IconProps = { className?: string };

function Icon({ className = "w-5 h-5", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const PhoneIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </Icon>
);

const MailIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </Icon>
);

const PinIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </Icon>
);

const ClockIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </Icon>
);

const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 13l4 4L19 7" />
  </Icon>
);

const contactItems = [
  { label: "Teléfono", value: SITE_CONTACT.phone, href: SITE_CONTACT.phoneHref, Icon: PhoneIcon },
  { label: "Correo", value: SITE_CONTACT.email, href: `mailto:${SITE_CONTACT.email}`, Icon: MailIcon },
  { label: "Oficina", value: SITE_CONTACT.address, Icon: PinIcon },
  { label: "Horario de atención", value: SITE_CONTACT.hours, Icon: ClockIcon },
];

// =========================================================
// SECCIÓN
// =========================================================
export default function ContactoSection() {
  const { ref, visible } = useReveal<HTMLElement>();
  // Cambiar la key remonta el formulario y reinicia su estado ("Enviar otro mensaje")
  const [formKey, setFormKey] = useState(0);

  const reveal = (delay: number) => revealProps(visible, delay);

  return (
    <section
      ref={ref}
      className="relative bg-[#f5f5f5] text-black overflow-hidden py-20 lg:py-28"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="relative max-w-[1340px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="relative">
          {/* Marco desplazado (mismo recurso visual que Quiénes Somos) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute pointer-events-none z-0 border-[24px] border-black/[0.07]"
            style={{ top: "40px", left: "-40px", width: "100%", height: "100%" }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
            {/* ========================================================= */}
            {/* PANEL IZQUIERDO: MENSAJE + DATOS DE CONTACTO              */}
            {/* ========================================================= */}
            <div
              className={`lg:col-span-5 relative overflow-hidden bg-[#141414] text-white p-8 sm:p-12 lg:p-14 ${reveal(0).className}`}
              style={reveal(0).style}
            >
              <div
                aria-hidden="true"
                className="absolute -right-24 -bottom-24 w-80 h-80 border-[32px] border-white/[0.04] rotate-45 pointer-events-none"
              />
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-14 h-14 border-t-[3px] border-l-[3px] border-brand"
              />

              <div className="relative">
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-brand block">
                  Contacto
                </span>

                <h2 className="font-oswald-bold uppercase text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] tracking-tight mt-5 mb-5">
                  Hablemos de <span className="text-brand">tu proyecto</span>
                </h2>

                <p className="text-neutral-400 font-light text-sm sm:text-[15px] leading-relaxed max-w-sm mb-10">
                  Cuéntanos qué tienes en mente. Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo para
                  coordinar una asesoría técnica y de diseño.
                </p>

                <ul className="space-y-6">
                  {contactItems.map(({ label, value, href, Icon: ItemIcon }) => (
                    <li key={label} className="flex items-start gap-4">
                      <span className="shrink-0 w-11 h-11 flex items-center justify-center border border-white/15 text-brand">
                        <ItemIcon className="w-5 h-5" />
                      </span>
                      <div className="pt-0.5">
                        <span className="block text-[11px] font-bold uppercase tracking-[2px] text-neutral-500 mb-1">
                          {label}
                        </span>
                        {href ? (
                          <a href={href} className="text-sm text-white hover:text-brand transition-colors">
                            {value}
                          </a>
                        ) : (
                          <span className="text-sm text-white">{value}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ========================================================= */}
            {/* PANEL DERECHO: FORMULARIO                                 */}
            {/* ========================================================= */}
            <div
              className={`lg:col-span-7 bg-white p-8 sm:p-12 lg:p-14 ${reveal(150).className}`}
              style={reveal(150).style}
            >
              <ContactoForm key={formKey} onReset={() => setFormKey((k) => k + 1)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// FORMULARIO
// =========================================================
function ContactoForm({ onReset }: { onReset: () => void }) {
  const [state, formAction, pending] = useActionState(enviarContacto, contactoInitialState);

  if (state.status === "success") {
    return (
      <div role="status" className="animate-fadeIn flex flex-col items-start justify-center min-h-[380px]">
        <span className="w-16 h-16 bg-brand text-black flex items-center justify-center mb-8">
          <CheckIcon className="w-8 h-8" />
        </span>
        <h3 className="font-oswald-bold uppercase text-3xl sm:text-4xl tracking-tight mb-4">¡Mensaje enviado!</h3>
        <p className="text-neutral-600 font-light leading-relaxed max-w-md mb-8">
          Gracias por escribirnos. Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo pronto.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-bold uppercase tracking-[3px] text-black border-b-2 border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors cursor-pointer"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const errors = state.errors ?? {};

  return (
    <>
      <div className="mb-9">
        <span className="block text-[11px] font-bold uppercase tracking-[3px] text-neutral-400 mb-2">Escríbenos</span>
        <h3 className="font-oswald-bold uppercase text-2xl sm:text-3xl tracking-tight">Envíanos un mensaje</h3>
        <div className="w-12 h-[3px] bg-brand mt-4" />
      </div>

      <form action={formAction} noValidate className="space-y-8">
        <Field id="correo" label="Correo electrónico" error={errors.correo}>
          <input
            id="correo"
            name="correo"
            type="email"
            autoComplete="email"
            placeholder="nombre@empresa.com"
            defaultValue={state.values?.correo}
            aria-invalid={Boolean(errors.correo)}
            aria-describedby={errors.correo ? "correo-error" : undefined}
            className={inputClass(Boolean(errors.correo))}
          />
        </Field>

        <Field id="telefono" label="Teléfono" error={errors.telefono}>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            placeholder="+51 999 999 999"
            defaultValue={state.values?.telefono}
            aria-invalid={Boolean(errors.telefono)}
            aria-describedby={errors.telefono ? "telefono-error" : undefined}
            className={inputClass(Boolean(errors.telefono))}
          />
        </Field>

        <Field id="mensaje" label="Comentario" error={errors.mensaje}>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            maxLength={1000}
            placeholder="Cuéntanos sobre tu proyecto..."
            defaultValue={state.values?.mensaje}
            aria-invalid={Boolean(errors.mensaje)}
            aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
            className={`${inputClass(Boolean(errors.mensaje))} resize-none`}
          />
        </Field>

        {/* Campo trampa anti-spam: oculto para personas */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Sitio web
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {state.status === "error" && state.message && (
          <p role="alert" className="border-l-4 border-red-500 bg-red-50 px-4 py-3 text-sm text-red-700">
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="group relative inline-flex items-center bg-black text-white px-10 py-4 hover:bg-brand hover:text-black transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          <span className="block pr-12 text-xs font-bold uppercase tracking-[4px]">
            {pending ? "Enviando..." : "Enviar mensaje"}
          </span>
          {pending ? (
            <span className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
          ) : (
            <span className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-[1.5px] bg-current transition-all duration-300 group-hover:w-8" />
          )}
        </button>
      </form>
    </>
  );
}

function inputClass(hasError: boolean) {
  return `peer w-full bg-transparent border-0 border-b-2 py-3 text-[15px] text-black placeholder:text-neutral-400 focus:outline-none transition-colors ${
    hasError ? "border-red-500" : "border-neutral-300"
  }`;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] font-bold uppercase tracking-[2.5px] text-neutral-500 mb-1">
        {label}
      </label>
      <div className="relative">
        {children}
        {/* Línea verde que se dibuja al enfocar el campo (hermana del input con .peer) */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-brand transition-all duration-500 peer-focus:w-full"
        />
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
