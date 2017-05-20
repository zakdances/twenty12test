import { Pipe, PipeTransform } from '@angular/core';
import { StubService } from './stub.service';
// import { FilterControlsService } from './filter-controls.service';
import { Option, Control} from './filters/filters';
import { Event } from './event';

@Pipe({
  name: 'filteredList'
})
export class FilteredListPipe implements PipeTransform {

  constructor() {

  }
  
  transform(rows: any[], filters: {string: Control[]}, index: string): Event[] {

    const _filters: Control[] = filters[index];

    // Find the relevant filters    
    const eventStatus = _filters.find((c,i,a) => {
      return c.value === 'eventStatus';
    });
    const f1 = eventStatus ? eventStatus.selectedOption : null;

    const eventTimeline = _filters.find((c,i,a) => {
      return c.value === 'eventTimeline';
    });
    const f2 = eventTimeline ? eventTimeline.selectedOption : null;    

    const search = _filters.find((c,i,a) => {
      return c.value === 'search';
    });
    const f3 = search ? search.selectedOption : null;    


    
    const newRows = rows.filter((row: Event, i, a) => {

      if (f1 && f1.value.toLowerCase() !== 'all') {
        if (f1.value !== row.eventStatus) {
          return false;
        }
      }

      if (f2 && f2.value.toLowerCase() !== 'all') {
        const now = (new Date()).valueOf();
        const eventData = row.eventDate;

        const v = f2.value.toLowerCase();
        if (v === 'upcoming' && now > eventData) {
          return false;
        } else if (v === 'past' && now < eventData) {
          return false;
        }
      }

      if (f3 && f3.value.length > 0) {
        const v = f3.value.toLowerCase();

        if (row.eventName.toLowerCase().indexOf(v) < 0){
          return false;
        }

      }

      return true;
    })


    
    return newRows;
  }

}
