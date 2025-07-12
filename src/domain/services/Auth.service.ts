import { SignInRequestDTO } from "@/dtos/auth/SignInRequest.dto";
import { SignInResponseDTO } from "@/dtos/auth/SignInResponse.dto";
import { Failure, Result, Success } from "@/shared/utils/Result";
import { AuthPortIn } from "ports/ports-in/Auth.port-in";
import { AuthRepositoryPortOut } from "ports/ports-out/AuthRepository.port-out";

export class AuthService implements AuthPortIn {
  
  constructor(private authRepository: AuthRepositoryPortOut) {}

  public async signIn (data: SignInRequestDTO):  Promise<Result<SignInResponseDTO, Error>> {
    if (!data.email || !data.password) {
      return new Failure(new Error("Email and password are required"));
    }

    const result = await this.authRepository.signIn(data);
    return new Success(result);
  }
}