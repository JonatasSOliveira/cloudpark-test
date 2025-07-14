import { TicketCategoryPortIn } from '@/ports/ports-in/TicketCategory.port-in';
import { Result } from '@/shared/utils/Result';
import { TicketCategoryListResponseDTO } from '../dtos/ticket-category/TicketCategoryListResponse.dto';
import { TicketCategoryRepositoryPortOut } from '@/ports/ports-out/TicketCategoryRepository.port-out';

export class TicketCategoryService implements TicketCategoryPortIn {
  constructor(private repository: TicketCategoryRepositoryPortOut) {}

  public async listAll(): Promise<Result<TicketCategoryListResponseDTO[], Error>> {
    try {
      const result = await this.repository.listAll();
      return Result.ok(result);
    } catch (error) {
      return Result.err(error as Error);
    }
  }
}
