import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventStatus',
  standalone: true
})
export class EventStatusPipe implements PipeTransform {

  transform(startDate: string, endDate: string): string {
    const today = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (today < start) return 'Upcoming';
    if (today >= start && today <= end) return 'Ongoing';
    return 'Completed';
  }
}