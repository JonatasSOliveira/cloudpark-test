import { TicketCreateRequestDTO } from "@/dtos/ticket/TicketCreateRequest.dto";
import { TicketCreateResponseDTO } from "@/dtos/ticket/TicketCreateResponse.dto";
import { Result } from "@/shared/utils/Result";

export interface TicketPortIn {
  create(ticket: TicketCreateRequestDTO): Promise<Result<TicketCreateResponseDTO, Error>>
}