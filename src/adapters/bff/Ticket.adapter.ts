import { TicketCreateRequestDTO } from "@/dtos/ticket/TicketCreateRequest.dto";
import { TicketCreateResponseDTO } from "@/dtos/ticket/TicketCreateResponse.dto";
import { TicketStatus } from "@/dtos/ticket/TicketStatus.enum";
import { TicketRepositoryPortOut } from "ports/ports-out/TicketRepository.port-out";

export class BFFTicketAdapter implements TicketRepositoryPortOut {

  public async create(ticket: TicketCreateRequestDTO): Promise<TicketCreateResponseDTO> {
    return {
      id: '1',
      title: ticket.title,
      description: ticket.description,
      status: TicketStatus.OPEN,
      createdAt: new Date().toISOString(),
      categoryName: 'category name'
    }
  }
  
}