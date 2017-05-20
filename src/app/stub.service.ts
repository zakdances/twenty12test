import { Injectable, OnInit } from '@angular/core';
import { Event, newEvent } from './event';


@Injectable()
export class StubService {
  
  rows = [];
  
  categories = [
    {
      name: 'Student Group'
    },
    {
      name: 'Event Type'
    },
    {
      name: 'Event Format'
    },
{
  name: 'Event Timeline',
  options: [
    'Upcoming',
    'Past'
  ]
    },
{
      name: 'Employer Name'
    },
{
      name: 'Event Source'
    },
{
      name: 'Event Status'
    },
{
      name: 'Posted Date'
    },

{
      name: 'Event Has Reception'
    },
{
      name: 'Event Has Catering'
    },
{
      name: 'Event Room'
    },
{
      name: 'Target Job Position'
    },
{
      name: 'Industry'
    },{
      name: 'Career Center Account Center'
    }
  ]
  constructor() { 
    this.loadRows();
  }
  loadRows() {
    console.log('prepared!!!');
    this.rows = [
    newEvent('8371kkasr355ffafm', 1, 'Swimlane', 0),
    newEvent('A Large Gathering', 563334235545, 'KFC', 9),
    newEvent('The County Fair', 635963574, 'Burger King', 15),
    newEvent('2371kkasr355ffafm', 1, 'Swimlane', 43),
    newEvent('Meeting of the Minds', 1949999499999, 'KFC', 0),
    newEvent('Transformers', 1235678999, 'Burger King', 6)
  ];
  }  

}
