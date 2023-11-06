import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-landing',
  templateUrl: './navbar-landing.component.html',
  styleUrls: ['./navbar-landing.component.scss']
})
export class NavbarLandingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.menuCollapsable();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  menuCollapsable() {
    const button = document.querySelector('#navbarSideCollapse');
    const canvas = document.querySelector('.offcanvas-collapse');
    button?.addEventListener('click', () => {
      canvas?.classList.toggle('open')
    });
  }

}
