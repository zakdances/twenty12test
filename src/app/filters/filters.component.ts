import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { StubService } from './../stub.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

//   sliders = [
//     {
//       name: 'Student Group'
//     },
//     {
//       name: 'Event Type'
//     },
//     {
//       name: 'Event Format'
//     },
// {
//       name: 'Event Timeline'
//     }
//   ]

  constructor(private stub: StubService) {
    
   }

  ngOnInit() {
  }

}

@Pipe({name: 'getOptions'})
export class GetOptionsPipe implements PipeTransform {
  constructor(private stub: StubService) {

  }
  transform(category: {name: string, options: [any]}): any[] {
    // let exp = parseFloat(exponent);
    const options = new Set();
    options.add('All');

    if (category.name === 'Event Status') {
      this.stub.rows.forEach((v, i, a) => {
        options.add(v.eventStatus);
        // return v.eventStatus;
      });
    }
    else if (category.options && category.options.length > 0) {
      category.options.forEach((v, i, a) => {
        options.add(v);
      });
    } else {
      options.add('Option A');
      options.add('Option B');
      options.add('Option C');
    }
    return Array.from(options);
  }
}