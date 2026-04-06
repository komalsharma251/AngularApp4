import { EventStatusPipe } from './event-status-pipe';

describe('EventStatusPipe', () => {

  let pipe: EventStatusPipe;

  beforeEach(() => {
    pipe = new EventStatusPipe();
  });

  it('should return Upcoming when start date is in future', () => {
    const result = pipe.transform('2099-01-01', '2099-01-10');
    expect(result).toBe('Upcoming');
  });

  it('should return Ongoing when current date is between range', () => {
    const result = pipe.transform('2020-01-01', '2099-12-31');
    expect(result).toBe('Ongoing');
  });

  it('should return Completed when end date is in past', () => {
    const result = pipe.transform('2020-01-01', '2020-01-10');
    expect(result).toBe('Completed');
  });

});