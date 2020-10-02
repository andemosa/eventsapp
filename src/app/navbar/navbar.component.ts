import { EventService } from './../events/events.service';
import { ISession } from './../events/event.model';
import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      li > a.active {
        color: #f97924;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];
  constructor(public auth: AuthService, private eventService: EventService) {}

  ngOnInit(): void {}

  searchSessions(searchTerm) {
    this.eventService
      .searchSessions(searchTerm)
      .subscribe((sessions) => (this.foundSessions = sessions));
  }
}
