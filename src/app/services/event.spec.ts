import { TestBed } from '@angular/core/testing';
import { EventService } from './event';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EventService', () => {
  let service: EventService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventService]
    });

    service = TestBed.inject(EventService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch events', () => {
    const mockEvents = [{ id: 1, title: 'Test Event' }];

    service.getEvents().subscribe(events => {
      expect(events.length).toBe(1);
      expect(events).toEqual(mockEvents);
    });

    const req = httpMock.expectOne('http://localhost:3000/events');
    req.flush(mockEvents);
  });
});