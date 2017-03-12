import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-switch',
  templateUrl: './directive-switch.component.html',
  styleUrls: ['./directive-switch.component.css']
})
export class DirectiveSwitchComponent implements OnInit {

  public tab: string = 'home';

  constructor() { }

  ngOnInit() {
  }

}
