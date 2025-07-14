import { SignInRequestDTO } from '@/domain/dtos/auth/SignInRequest.dto';
import { SignInResponseDTO } from '@/domain/dtos/auth/SignInResponse.dto';
import { ValidationError } from '@/domain/errors/Validation.error';
import { Result } from 'shared/utils/Result';

export type SignInResponse = Promise<
  Result<SignInResponseDTO, ValidationError<SignInRequestDTO> | Error>
>;

export interface AuthPortIn {
  signIn(data: SignInRequestDTO): SignInResponse;
}
