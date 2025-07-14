import { create } from 'zustand';
import { TicketListResponseDTO } from '@/domain/dtos/ticket/TicketListResponse.dto';

type TicketState = {
  tickets: TicketListResponseDTO[];
  setTickets: (tickets: TicketListResponseDTO[]) => void;
  addTicket: (ticket: TicketListResponseDTO) => void;
  clearTickets: () => void;
};

export const useTicketStore = create<TicketState>((set) => ({
  tickets: [],
  setTickets: (tickets) => set({ tickets }),
  addTicket: (ticket) => set((state) => ({ tickets: [ticket, ...state.tickets] })),
  clearTickets: () => set({ tickets: [] }),
}));
