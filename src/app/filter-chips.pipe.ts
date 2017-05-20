import { Pipe, PipeTransform } from '@angular/core';
import { Control, Option } from './filters/filters';

@Pipe({
  name: 'filterChips'
})
export class FilterChipsPipe implements PipeTransform {

  transform(filters: {string: Control[]}, index: string): Control[] {
    
    const _filters: Control[] = filters[index];

    const chips = _filters.filter((c, i, a) => {
      const v = c.value.toLowerCase();
      const ov = c.selectedOption ? c.selectedOption.value : null;

      if (v !== 'search' && ov && ov !== 'all') {
        return true;
      } else if (v === 'search' && ov && ov.length > 0) {
        return true;
      }
      return false;
    });

    return chips;
  }

}
