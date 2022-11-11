import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public authServices: AuthService) {}

  selectedNavTab: any;

  selectedTab() {
    document.getElementsByClassName('cart-area')[0].classList.add('activeCart');
    document
      .getElementsByClassName('cart-container')[0]
      .classList.add('cart-active__container');
  }

  closeTab() {
    document
      .getElementsByClassName('cart-area')[0]
      .classList.remove('activeCart');
    document
      .getElementsByClassName('cart-container')[0]
      .classList.remove('cart-active__container');
  }

  //Function for Header mune in Mobie
  openMenu() {
    document
      .getElementsByClassName('menu-mobie')[0]
      .classList.add('active-menu');
    document
      .getElementsByClassName('menu-mobie')[0]
      .classList.remove('close-menu');
    document.getElementsByClassName('menu-bars')[0].classList.add('close-menu');
    document
      .getElementsByClassName('menu-close')[0]
      .classList.add('active-menu');
  }

  closeMenu() {
    document
      .getElementsByClassName('menu-mobie')[0]
      .classList.add('close-menu');
    document
      .getElementsByClassName('menu-mobie')[0]
      .classList.remove('active-menu');
    document
      .getElementsByClassName('menu-bars')[0]
      .classList.add('active-menu');
    document
      .getElementsByClassName('menu-bars')[0]
      .classList.remove('close-menu');
    document
      .getElementsByClassName('menu-close')[0]
      .classList.remove('active-menu');
  }

  ngOnInit(): void {}
}
