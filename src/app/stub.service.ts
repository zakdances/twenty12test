import { Injectable } from '@angular/core';

@Injectable()
export class StubService {
  links = [
    {
      name: 'home'
    },{
      name: 'Students'
    },
    {
      name: 'Employers'
    },
    {
      name: 'Contacts'
    },
    {
      name: 'Tasks'
    },
    {
      name: 'Activity Stream'
    },
    {
      name: 'Reporting Dashboards'
    },
    {
      name: 'Custom Reports'
    },
    {
      name: '12Twenty Reports'
    }
  ]
  rows = [
    { eventName: '8371kkasr355ffafm', eventDate: 'Male', eventStatus: 'Swimlane', registrants: 0 },
    { eventName: 'Dany', eventDate: 'Male', eventStatus: 'KFC', registrants: 9 },
    { eventName: 'Molly', eventDate: 'Female', eventStatus: 'Burger King', registrants: 15 },
    { eventName: '8371kkasr355ffafm', eventDate: 'Male', eventStatus: 'Swimlane', registrants: 43 },
    { eventName: 'Dany', eventDate: 'Male', eventStatus: 'KFC', registrants: 0 },
    { eventName: 'Molly', eventDate: 'Female', eventStatus: 'Burger King', registrants: 0 }
  ];
  columns = [
    { name: 'Event Name' },
    { name: 'Event Date' },
    { name: 'Event Status' },
    {
      prop: 'registrants',
      name: 'Registrants (Waitlist)'
    }
  ];
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
  constructor() { }

}
