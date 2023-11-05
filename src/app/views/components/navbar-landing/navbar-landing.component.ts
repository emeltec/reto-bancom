import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-landing',
  templateUrl: './navbar-landing.component.html',
  styleUrls: ['./navbar-landing.component.scss']
})
export class NavbarLandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.menuCollapsable();
  }

  menuCollapsable(){
    const button = document.querySelector('#navbarSideCollapse');
    const canvas = document.querySelector('.offcanvas-collapse');
    button?.addEventListener('click', () => {
      canvas?.classList.toggle('open')
    });
  }

}
