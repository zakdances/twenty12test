import { Component, OnInit, Pipe, PipeTransform, Input, Output } from '@angular/core';
import { Option, Control, newFilter, newOption, newAllOption, newDefaultOptions } from './filters';
import { FilterControlsService } from './../filter-controls.service';
import { StubService } from './../stub.service';
// import camelcase from 'camelcase';
// const camelCase = require('camelcase');
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {


  // @Input()
  private filters: Control[];
  private search: string;

  constructor(private stub: StubService, private filterModels: FilterControlsService) {

    
   }

  ngOnInit() {

    const eventStatus = newFilter('eventStatus', null, 0, [newAllOption()]);
    // const search = newFilter('search', null, null, null, 'input');
    // delete search.selectedOption;

    const controls = [
      newFilter('search', null, null, null, 'input'),
      newFilter('studentGroup', null, 0, newDefaultOptions()),
      newFilter('eventType', null, 0, newDefaultOptions()),
      newFilter('eventFormat', null, 0, newDefaultOptions()),
      newFilter('eventTimeline', null, 0, [
        newAllOption(),
        newOption('upcoming', 'Upcoming'),
        newOption('past', 'Past')
      ]),
      newFilter('employerName', null, 0, newDefaultOptions()),
      newFilter('eventSource', null, 0, newDefaultOptions()),
      eventStatus,
      newFilter('postedDate', null, 0, newDefaultOptions()),
      newFilter('eventHasReception', null, 0, newDefaultOptions()),
      newFilter('eventHasCatering', null, 0, newDefaultOptions()),
      newFilter('eventRoom', null, 0, newDefaultOptions()),
      newFilter('targetJobPosition', null, 0, newDefaultOptions()),
      newFilter('industry', null, 0, newDefaultOptions()),
      newFilter('careerCenterAccountCenter', null, 0, newDefaultOptions())
    ];
    this.filters = controls;
    
    // Get status options from data
    const eventStatusesSet = new Set();
    this.stub.rows.forEach((v, i, a) => {
      eventStatusesSet.add(v.eventStatus);
    });
    // const eventStatuses = Array.from(eventStatusesSet);

    Array.from(eventStatusesSet).forEach((l, i, a) => {
      const option = newOption(l, l);
      eventStatus.options.push(option);

    });
   
    this.updateModel(); 
    // this.filterModels.all['filters1'] = this.filters; 
    // filters.eventFormat = { selected: 'asdsa' };
    // console.log(Object.getOwnPropertyNames(this.filters));
  }

  onChange($event, name?: string) {
    // console.log('changed!');
    // console.log($event, name);
    if (name && name.toLowerCase() === 'search') {
      const c = this.filters.find((c,i,a) => {
        return c.value && c.value.toLowerCase() === 'search';
      });
      // const newSearch = newOption($event);
      if ($event && $event.length > 0) {
        c.selectedOption = newOption($event);
      } else {
        delete c.selectedOption;
      }
    }
    this.updateModel();
  }

  updateModel() {
    const newModel = {
      ...{}, ...this.filterModels.all
    };
    newModel['filters1'] = this.filters; 
    
    this.filterModels.all = newModel;
  }
  
  toCamelCase = function(str: string) {
    console.log(typeof str);
      return str
          .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
          .replace(/\s/g, '')
          .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
  }
  
}



// @Pipe({name: 'getOptions'})
// export class GetOptionsPipe implements PipeTransform {

//   constructor(private stub: StubService) {

//   }

//   transform(control: Control): Option[] {
//     // let exp = parseFloat(exponent);
//     const options = new Set();
//     // options.add(newOption('all', 'All'));

//     // if (category.name === 'Event Status') {
//     //   this.stub.rows.forEach((v, i, a) => {
//     //     options.add(v.eventStatus);
//     //     // return v.eventStatus;
//     //   });
//     // }
//     if (control.options && control.options.length > 0) {
//       control.options.forEach((v, i, a) => {
//         options.add(v);
//       });
//     } else {
//       [
//         newAllOption(),
//         newOption('optionA', 'Option A'),
//         newOption('optionB', 'Option B'),
//         newOption('optionC', 'Option C')].forEach((v, i, a) => {
//           options.add(v);
//       });
//     }
//     return Array.from(options);
//   }
// }