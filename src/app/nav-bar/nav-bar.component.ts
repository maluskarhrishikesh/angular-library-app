import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   name: String;
   isAdmin: String;

  constructor() { 
    this.name = localStorage.getItem("name");
    this.isAdmin = localStorage.getItem("isAdmin");
  }

  ngOnInit() {
    this.name = localStorage.getItem("name");
    this.isAdmin = localStorage.getItem("isAdmin");
  }

}
