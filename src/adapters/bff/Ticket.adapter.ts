import { TicketCreateRequestDTO } from '@/domain/dtos/ticket/TicketCreateRequest.dto';
import { TicketCreateResponseDTO } from '@/domain/dtos/ticket/TicketCreateResponse.dto';
import { TicketListResponseDTO } from '@/domain/dtos/ticket/TicketListResponse.dto';
import { TicketStatus } from '@/domain/dtos/ticket/TicketStatus.enum';
import { TicketRepositoryPortOut } from '@/ports/ports-out/TicketRepository.port-out';

export class BFFTicketAdapter implements TicketRepositoryPortOut {
  public async create(ticket: TicketCreateRequestDTO): Promise<TicketCreateResponseDTO> {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return {
      id: '1',
      title: ticket.title,
      description: ticket.description,
      status: TicketStatus.OPEN,
      createdAt: new Date().toISOString(),
      categoryName: 'category name',
    };
  }

  public async listAll(): Promise<TicketListResponseDTO[]> {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return Array.from({ length: 2 }, (_, i) => ({
      id: (i + 1).toString(),
      title: `Chamado #${i + 1}`,
      description: `Descrição do chamado #${i + 1}`,
      status: [TicketStatus.OPEN, TicketStatus.IN_PROGRESS, TicketStatus.CLOSED][i % 3],
      createdAt: new Date(Date.now() - i * 86400000).toISOString(), // dias anteriores
      categoryName: `Categoria ${(i % 3) + 1}`,
    }));
  }
}
