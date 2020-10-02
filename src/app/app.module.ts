import { LocationValidator } from './events/location-validator.directive';
import { VoterService } from './events/event-details/voter.service';
import { VotingComponent } from './events/event-details/upvote.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { SimpleModalComponent } from './common/simple-modal.component';
import { DurationPipe } from './events/duration.pipe';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { AuthService } from './user/auth.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { EventResolver } from './events/event-details/event-resolver.service';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { appRoutes } from './routes';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { EventService } from './events/events.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EventAppComponent } from './events-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JQ_TOKEN } from './common/jQuery.service';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventAppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    VotingComponent,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventResolver,
    EventListResolver,
    AuthService,
    VoterService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
  ],
  bootstrap: [EventAppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  return component.isDirty
    ? window.confirm('Do you really want to cancel?')
    : true;
}
