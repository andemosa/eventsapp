import { EventService } from './events.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'events-list',
  template: ` <div>
    <h1>Upcoming Angular Events</h1>
    <hr />
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail
          [event]="event"
          (click)="handleThumbnailClick(event.name)"
        ></event-thumbnail>
      </div>
    </div>
  </div>`,
})
export class EventListComponent implements OnInit {
  events: any;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }
}
