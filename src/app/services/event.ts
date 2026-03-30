import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventItem } from '../models/event.model';
import { Observable, throwError, map } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  //  JSON SERVER API
  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {}

  //  GET EVENTS
  getEvents(): Observable<EventItem[]> {
    return this.http.get<EventItem[]>(this.apiUrl).pipe(
      catchError(() => {
        return throwError(() => new Error('Failed to load events'));
      })
    );
  }

  //  ADD EVENT
  addEvent(event: EventItem): Observable<EventItem> {

    //  Simulate occasional failure (assignment requirement)
    const shouldFail = Math.random() < 0.2;

    if (shouldFail) {
      return throwError(() => new Error('Simulated server error while saving event.'));
    }

    return this.http.post<EventItem>(this.apiUrl, event).pipe(
      catchError(() => {
        return throwError(() => new Error('Failed to save event'));
      })
    );
  }

  //  CHECK TITLE EXISTS (ASYNC VALIDATOR)
  checkTitleExists(title: string): Observable<boolean> {
    return this.http
      .get<EventItem[]>(`${this.apiUrl}?title=${title}`)
      .pipe(
        map(events => events.length > 0),
        catchError(() => {
          return throwError(() => new Error('Validation failed'));
        })
      );
  }
}