export interface ContactoValues {
  correo: string;
  telefono: string;
  mensaje: string;
}

export type ContactoErrors = Partial<Record<keyof ContactoValues, string>>;

export interface ContactoState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: ContactoErrors;
  /** Valores enviados, para no perder lo que el usuario escribió si hay errores. */
  values?: ContactoValues;
}

export const contactoInitialState: ContactoState = { status: "idle" };
