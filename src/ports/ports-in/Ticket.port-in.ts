import { TicketCreateRequestDTO } from '@/domain/dtos/ticket/TicketCreateRequest.dto';
import { TicketCreateResponseDTO } from '@/domain/dtos/ticket/TicketCreateResponse.dto';
import { TicketListResponseDTO } from '@/domain/dtos/ticket/TicketListResponse.dto';
import { ValidationError } from '@/domain/errors/Validation.error';
import { Result } from '@/shared/utils/Result';

export type CreateResponse = Promise<
  Result<TicketCreateResponseDTO, ValidationError<TicketCreateRequestDTO> | Error>
>;

export interface TicketPortIn {
  create(ticket: TicketCreateRequestDTO): CreateResponse;
  listAll(): Promise<Result<TicketListResponseDTO[], Error>>;
}
