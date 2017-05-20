import { Injectable, Input, Output } from '@angular/core';
import { Control } from './filters/filters';

@Injectable()
export class FilterControlsService {

  // @Input()  
  all: {string?: Control[]} = {
  }

  constructor() {

    
  }


}
