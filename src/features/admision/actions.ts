'use server';

import type { LeadAdmision } from './schemas';

export async function registrarLeadAdmision(data: LeadAdmision) {
  // Simulación de registro de lead en backend/CRM
  console.log('Nuevo lead recibido:', data);
  return { success: true, message: 'Solicitud registrada correctamente.' };
}
