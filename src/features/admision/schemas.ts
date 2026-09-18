export interface LeadAdmision {
  nombrePadre: string;
  correo: string;
  telefono: string;
  nivel: 'inicial' | 'primaria' | 'secundaria';
  mensaje?: string;
}
