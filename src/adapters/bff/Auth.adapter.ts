import { SignInRequestDTO } from "@/dtos/auth/SignInRequest.dto";
import { SignInResponseDTO } from "@/dtos/auth/SignInResponse.dto";
import { AuthRepositoryPortOut } from "ports/ports-out/AuthRepository.port-out";

export class BFFAuthAdapter implements AuthRepositoryPortOut {
 
  public async signIn(data: SignInRequestDTO): Promise<SignInResponseDTO> {
    return {name: 'JONATAS S. OLIVEIRA', token: '9PHs4BBCHvMbMRWSFFA7TtSF7CLZCHbwRLrsHsFoStA2cVvylFhMxc1ggVkm5Ycc'}
  }

}