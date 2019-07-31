import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  isLoggedIn: boolean = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.isLoggedIn = window.localStorage.getItem('token') ? true : false;
  }

  logout() {
    window.localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
