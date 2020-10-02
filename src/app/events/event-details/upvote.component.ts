import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'upvote',
  template: `<div class="votingWidgetContainer pointable" (click)="onClick()">
    <div class="well votingWidget">
      <div class="votingButton">
        <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
      </div>
      <div class="badge badge-inverse votingCount">
        {{ count }}
      </div>
    </div>
  </div>`,
  styleUrls: [`upvote.component.css`],
})
export class VotingComponent {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();
  iconColor: string;

  onClick() {
    this.vote.emit({});
  }
}
