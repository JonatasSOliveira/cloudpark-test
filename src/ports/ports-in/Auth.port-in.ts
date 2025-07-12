import { SignInRequestDTO } from "@/dtos/auth/SignInRequest.dto";
import { SignInResponseDTO } from "@/dtos/auth/SignInResponse.dto";
import { Result } from "shared/utils/Result";

export interface AuthPortIn {
  signIn(data: SignInRequestDTO): Promise<Result<SignInResponseDTO, Error>>;
}