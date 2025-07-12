import { TicketCreateRequestDTO } from "@/dtos/ticket/TicketCreateRequest.dto";
import { TicketCreateResponseDTO } from "@/dtos/ticket/TicketCreateResponse.dto";

export interface TicketRepositoryPortOut {
  create(ticket: TicketCreateRequestDTO): Promise<TicketCreateResponseDTO>;
}