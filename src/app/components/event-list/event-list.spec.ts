import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EventListComponent } from './event-list';
import { EventService } from '../../services/event';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: any;

  const mockEventService = {
    getEvents: () =>
      of([
        {
          title: 'Test Event',
          description: 'Test Description',
          category: 'Technology'
        }
      ])
  };

  const mockSnackBar = {
    open: vi.fn()
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventListComponent],
      providers: [
        { provide: EventService, useValue: mockEventService },
        { provide: MatSnackBar, useValue: mockSnackBar }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load events', async () => {
    await fixture.whenStable();
    fixture.detectChanges();

    expect(component.events.length).toBe(1);
  });
});