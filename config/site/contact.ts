export interface ContactConfig {
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
}

export const contact: ContactConfig = {
  phone: undefined,
  whatsapp: undefined,
  email: undefined,
  address: undefined,
  city: undefined,
  state: undefined,
  country: undefined,
};