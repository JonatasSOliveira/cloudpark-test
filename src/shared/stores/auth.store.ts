import { SignInResponseDTO } from '@/domain/dtos/auth/SignInResponse.dto';
import { create } from 'zustand';

interface AuthState {
  token: string | null;
  name: string | null;

  setSession: (params: SignInResponseDTO) => void;
  clearSession: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  name: null,

  setSession: ({ token, name }) => set({ token, name }),
  clearSession: () => set({ token: null, name: null }),
}));
