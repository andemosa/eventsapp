import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `<div
    [routerLink]="['/events', event.id]"
    class="well hoverwell thumbnail"
  >
    <h2>{{ event?.name }}</h2>
    <div>Date:{{ event?.date }}</div>
    <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">
      Time:{{ event?.time }}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>

    <div>Price:{{ event?.price | currency }}</div>
    <div *ngIf="event?.location">
      <span>Location:{{ event?.location.address }}</span>
      <span>&nbsp;</span>
      <span>{{ event?.location.city }},{{ event?.location.country }}</span>
    </div>
    <div *ngIf="event?.onlineUrl">Online URL:{{ event?.onlineUrl }}</div>
  </div>`,
  styles: [
    `
      .green {
        color: #003300 !important;
      }
      .thumbnail {
        min-height: 250px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  constructor() {}

  ngOnInit(): void {}
}
