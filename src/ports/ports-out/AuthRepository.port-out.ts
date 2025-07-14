import { SignInRequestDTO } from '@/domain/dtos/auth/SignInRequest.dto';
import { SignInResponseDTO } from '@/domain/dtos/auth/SignInResponse.dto';

export interface AuthRepositoryPortOut {
  signIn(data: SignInRequestDTO): Promise<SignInResponseDTO>;
}
