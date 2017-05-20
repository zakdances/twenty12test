import { Component, ViewChild, TemplateRef, OnInit, Renderer2 } from '@angular/core';
import { StubService } from './stub.service';
import { FilterControlsService } from './filter-controls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('eventDateCell') eventDateCell: TemplateRef<any>;
  columns = [];
  topRightIcons = [
    'home',
    'lightbulb_outline',
    'bug_report',
    'crop_square',
    'question_answer',
    'settings',
    'phone_in_talk',
    'account_circle'
  ]
  links = [
    {
      name: 'home'
    },
    {
      name: 'divider'
    },
    {
      name: 'Students'
    },
    {
      name: 'Employers'
    },
    {
      name: 'Contacts'
    },
    {
      name: 'divider'
    },
    {
      name: 'Tasks'
    },
    {
      name: 'Activity Stream'
    },
    {
      name: 'divider'
    },
    {
      name: 'Reporting Dashboards'
    },
    {
      name: 'Custom Reports'
    },
    {
      name: '12Twenty Reports'
    },
    {
      name: 'Standard Reports'
    },
    {
      name: 'divider'
    },
    {
      name: 'Research Tools'
    }
  ];

  private navOpen = true;

  constructor(private stub: StubService, private filters: FilterControlsService, private renderer: Renderer2) {
    
  }
  
  ngOnInit() {
    this.columns = [
      { name: 'Event Name' },
      { name: 'Event Date', cellTemplate: this.eventDateCell },
      { name: 'Event Status' },
      {
        prop: 'registrants',
        name: 'Registrants (Waitlist)'
      }];
    
    this.checkWindowWidth();
    this.renderer.listen(window, 'resize', (event) => {
      this.checkWindowWidth();
    });  
  }


private checkWindowWidth() : void {
    if(window.innerWidth > 768){
      this.navOpen = true;
    }else{
      this.navOpen = false;
    }
  }  
}
