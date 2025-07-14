import { TicketCategoryListResponseDTO } from '@/domain/dtos/ticket-category/TicketCategoryListResponse.dto';
import { TicketCategoryRepositoryPortOut } from '@/ports/ports-out/TicketCategoryRepository.port-out';

export class BFFTicketCategoryAdapter implements TicketCategoryRepositoryPortOut {
  public async listAll(): Promise<TicketCategoryListResponseDTO[]> {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return [
      { id: '1', name: 'Suporte Técnico' },
      { id: '2', name: 'Financeiro' },
      { id: '3', name: 'Recursos Humanos' },
      { id: '4', name: 'Infraestrutura' },
      { id: '5', name: 'Desenvolvimento / TI' },
      { id: '6', name: 'Atendimento ao Cliente' },
      { id: '7', name: 'Marketing' },
      { id: '8', name: 'Administrativo' },
    ];
  }
}
