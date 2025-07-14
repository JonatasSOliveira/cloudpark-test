import { TicketCategoryListResponseDTO } from '@/domain/dtos/ticket-category/TicketCategoryListResponse.dto';
import { Result } from '@/shared/utils/Result';

export interface TicketCategoryPortIn {
  listAll(): Promise<Result<TicketCategoryListResponseDTO[], Error>>;
}
