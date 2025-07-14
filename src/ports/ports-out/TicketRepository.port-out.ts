import { TicketCreateRequestDTO } from '@/domain/dtos/ticket/TicketCreateRequest.dto';
import { TicketCreateResponseDTO } from '@/domain/dtos/ticket/TicketCreateResponse.dto';
import { TicketListResponseDTO } from '@/domain/dtos/ticket/TicketListResponse.dto';

export interface TicketRepositoryPortOut {
  create(ticket: TicketCreateRequestDTO): Promise<TicketCreateResponseDTO>;
  listAll(): Promise<TicketListResponseDTO[]>;
}
