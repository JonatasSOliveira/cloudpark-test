import { SignInRequestDTO } from "@/dtos/auth/SignInRequest.dto";
import { SignInResponseDTO } from "@/dtos/auth/SignInResponse.dto";

export interface AuthRepositoryPortOut {
  signIn(data: SignInRequestDTO): Promise<SignInResponseDTO>;
}