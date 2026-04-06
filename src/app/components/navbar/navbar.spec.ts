import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, CommonModule],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });
});