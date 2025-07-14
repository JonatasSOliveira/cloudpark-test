export enum TicketStatus {
  OPEN,
  IN_PROGRESS,
  CLOSED,
}

export const TicketStatusLabels = {
  [TicketStatus.OPEN]: 'Aberto',
  [TicketStatus.IN_PROGRESS]: 'Em andamento',
  [TicketStatus.CLOSED]: 'Resolvido',
};
