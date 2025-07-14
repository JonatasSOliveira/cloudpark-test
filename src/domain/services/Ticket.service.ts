import { TicketCreateRequestDTO } from '@/domain/dtos/ticket/TicketCreateRequest.dto';
import { CreateResponse, TicketPortIn } from '@/ports/ports-in/Ticket.port-in';
import { TicketRepositoryPortOut } from '@/ports/ports-out/TicketRepository.port-out';
import { Result } from '@/shared/utils/Result';
import { TicketListResponseDTO } from '@/domain/dtos/ticket/TicketListResponse.dto';
import { ValidationError } from '../errors/Validation.error';
import { FieldErrors } from '../errors/Field.error';

export class TicketService implements TicketPortIn {
  constructor(private repository: TicketRepositoryPortOut) {}

  public async create(ticket: TicketCreateRequestDTO): CreateResponse {
    const fieldErrors: FieldErrors<TicketCreateRequestDTO> = {};

    if (!ticket.title || !ticket.title.trim()) {
      fieldErrors.title = 'Título é obrigatório';
    }

    if (!ticket.description || !ticket.description.trim()) {
      fieldErrors.description = 'Descrição é obrigatória';
    }

    if (!ticket.categoryId || !ticket.categoryId.trim()) {
      fieldErrors.categoryId = 'Categoria é obrigatória';
    }

    if (Object.keys(fieldErrors).length > 0) {
      return Result.err(new ValidationError<TicketCreateRequestDTO>(fieldErrors));
    }

    const response = await this.repository.create(ticket);
    return Result.ok(response);
  }

  public async listAll(): Promise<Result<TicketListResponseDTO[], Error>> {
    const response = await this.repository.listAll();
    return Result.ok(response);
  }
}
