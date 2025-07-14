import Constants from 'expo-constants';

import { SignInRequestDTO } from '@/domain/dtos/auth/SignInRequest.dto';
import { SignInResponseDTO } from '@/domain/dtos/auth/SignInResponse.dto';
import { AuthRepositoryPortOut } from '@/ports/ports-out/AuthRepository.port-out';

export class BFFAuthAdapter implements AuthRepositoryPortOut {
  public async signIn(data: SignInRequestDTO): Promise<SignInResponseDTO> {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const mockedEmail = Constants.expoConfig?.extra?.authEmail;
    const mockedPassword = Constants.expoConfig?.extra?.authPassword;

    if (data.email !== mockedEmail || data.password !== mockedPassword) {
      throw new Error('Email ou senha inválidos');
    }

    return {
      name: 'JONATAS S. OLIVEIRA',
      token: '9PHs4BBCHvMbMRWSFFA7TtSF7CLZCHbwRLrsHsFoStA2cVvylFhMxc1ggVkm5Ycc',
    };
  }
}
