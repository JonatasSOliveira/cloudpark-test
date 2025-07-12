import { TicketCreateRequestDTO } from "@/dtos/ticket/TicketCreateRequest.dto";
import { TicketCreateResponseDTO } from "@/dtos/ticket/TicketCreateResponse.dto";
import { Result, Success } from "@/shared/utils/Result";
import { TicketPortIn } from "ports/ports-in/Ticket.port-in";
import { TicketRepositoryPortOut } from "ports/ports-out/TicketRepository.port-out";

export class TicketService implements TicketPortIn {
  constructor(private repository: TicketRepositoryPortOut) {}

  public async create (ticket: TicketCreateRequestDTO) : Promise<Result<TicketCreateResponseDTO, Error>> {
    const response = await this.repository.create(ticket);
    return new Success(response);
  }
}