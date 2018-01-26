import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  selected = 'about';

  constructor() { }

  ngOnInit() {
  }

  onSelect(name: string): void {
  	console.log(name);
    this.selected = name;
  }

}
