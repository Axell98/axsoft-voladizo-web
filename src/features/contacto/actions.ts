import { API_BASE_URL } from "@/lib/api";
import type { ContactoErrors, ContactoState, ContactoValues } from "./types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS_REGEX = /^[+\d\s()-]+$/;

function texto(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

function validar({ correo, telefono, mensaje }: ContactoValues): ContactoErrors {
  const errors: ContactoErrors = {};

  if (!correo) {
    errors.correo = "Ingresa tu correo electrónico.";
  } else if (correo.length > 254 || !EMAIL_REGEX.test(correo)) {
    errors.correo = "Ingresa un correo válido, por ejemplo nombre@empresa.com.";
  }

  const digitos = telefono.replace(/\D/g, "");
  if (!telefono) {
    errors.telefono = "Ingresa un número de teléfono.";
  } else if (!PHONE_CHARS_REGEX.test(telefono) || digitos.length < 7 || digitos.length > 15) {
    errors.telefono = "Ingresa un teléfono válido (entre 7 y 15 dígitos).";
  }

  if (!mensaje) {
    errors.mensaje = "Cuéntanos brevemente sobre tu proyecto.";
  } else if (mensaje.length < 10) {
    errors.mensaje = "Escribe al menos 10 caracteres.";
  } else if (mensaje.length > 1000) {
    errors.mensaje = "El mensaje no puede superar los 1000 caracteres.";
  }

  return errors;
}

export async function enviarContacto(
  _prevState: ContactoState,
  formData: FormData
): Promise<ContactoState> {
  // Campo trampa: los usuarios no lo ven, los bots suelen completarlo.
  if (texto(formData.get("website"))) {
    return { status: "success" };
  }

  const values: ContactoValues = {
    correo: texto(formData.get("correo")),
    telefono: texto(formData.get("telefono")),
    mensaje: texto(formData.get("mensaje")),
  };

  const errors = validar(values);
  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados e inténtalo de nuevo.",
      errors,
      values,
    };
  }

  try {
    const res = await fetch(`${API_BASE_URL}/contacto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...values,
        website: texto(formData.get("website")),
      }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      if (res.status === 422 && data?.errors) {
        const apiErrors: ContactoErrors = {};
        for (const [key, msgArray] of Object.entries(data.errors)) {
          if (Array.isArray(msgArray) && msgArray.length > 0) {
            apiErrors[key as keyof ContactoValues] = String(msgArray[0]);
          }
        }
        return {
          status: "error",
          message: data.message || "Revisa los datos ingresados.",
          errors: apiErrors,
          values,
        };
      }

      return {
        status: "error",
        message:
          data?.message ||
          "No pudimos enviar tu mensaje en este momento. Por favor contáctanos por WhatsApp.",
        values,
      };
    }

    return { status: "success" };
  } catch (err) {
    console.error("[contacto] Error al conectar con la API:", err);
    return {
      status: "error",
      message:
        "Ocurrió un problema de conexión con el servidor. Por favor comunícate directamente por teléfono o WhatsApp.",
      values,
    };
  }
}

