import { TicketStatus } from "./TicketStatus.enum"

export interface TicketCreateResponseDTO {
  id: string
  title: string
  description: string
  status: TicketStatus
  createdAt: string
  categoryName: string
}