import { TicketCategoryListResponseDTO } from '@/domain/dtos/ticket-category/TicketCategoryListResponse.dto';

export interface TicketCategoryRepositoryPortOut {
  listAll(): Promise<TicketCategoryListResponseDTO[]>;
}
