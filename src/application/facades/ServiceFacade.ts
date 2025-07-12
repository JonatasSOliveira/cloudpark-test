import { BFFTicketAdapter } from "@/adapters/bff/Ticket.adapter";
import { BFFAuthAdapter } from "@/adapters/bff/Auth.adapter";
import { AuthService } from "@/domain/services/Auth.service";
import { TicketService } from "@/domain/services/Ticket.service";

class LazyServiceFacade {
  private _authService?: AuthService;
  private _ticketService?: TicketService;

  get authService(): AuthService {
    if (!this._authService) {
      this._authService = new AuthService(new BFFAuthAdapter());
    }
    return this._authService;
  }

  get ticketService(): TicketService {
    if (!this._ticketService) {
      this._ticketService = new TicketService(new BFFTicketAdapter());
    }
    return this._ticketService;
  }
}

export const ServiceFacade = new LazyServiceFacade();
