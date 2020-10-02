import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventListResolver } from './events/events-list-resolver.service';
import { EventResolver } from './events/event-details/event-resolver.service';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { Routes } from '@angular/router';
import { EventDetailComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/events-list.component';

export const appRoutes: Routes = [
  {
    path: 'events/session/new',
    component: CreateSessionComponent,
  },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    resolve: { event: EventResolver },
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () =>
      import('src/app/user/user.module').then((m) => m.UserModule),
  },
];
