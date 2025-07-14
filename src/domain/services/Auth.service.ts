import { SignInRequestDTO } from '@/domain/dtos/auth/SignInRequest.dto';
import { Result } from '@/shared/utils/Result';
import { ValidationError } from '@/domain/errors/Validation.error';
import { FieldErrors } from '@/domain/errors/Field.error';
import { AuthPortIn, SignInResponse } from '@/ports/ports-in/Auth.port-in';
import { AuthRepositoryPortOut } from '@/ports/ports-out/AuthRepository.port-out';

export class AuthService implements AuthPortIn {
  constructor(private authRepository: AuthRepositoryPortOut) {}

  public async signIn(data: SignInRequestDTO): SignInResponse {
    try {
      const fieldErrors: FieldErrors<SignInRequestDTO> = {};

      if (!data.email || !data.email.trim()) {
        fieldErrors.email = 'Email é obrigatório';
      } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        fieldErrors.email = 'Email inválido';
      }

      if (!data.password || !data.password.trim()) {
        fieldErrors.password = 'Senha é obrigatória';
      }

      if (Object.keys(fieldErrors).length > 0) {
        return Result.err(new ValidationError<SignInRequestDTO>(fieldErrors));
      }

      const result = await this.authRepository.signIn(data);
      return Result.ok(result);
    } catch (error) {
      return Result.err(error as Error);
    }
  }
}
