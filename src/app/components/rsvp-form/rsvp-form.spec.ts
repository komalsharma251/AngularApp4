import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RsvpFormComponent } from './rsvp-form';

describe('RsvpFormComponent', () => {
  let component: RsvpFormComponent;
  let fixture: ComponentFixture<RsvpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsvpFormComponent] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(RsvpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});