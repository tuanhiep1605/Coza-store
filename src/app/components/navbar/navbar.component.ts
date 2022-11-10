import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public authServices: AuthService) {}

  // openCart = 'close';
  // selectedCart(value: any) {
  //   console.log(value);
  //   this.openCart = value;
  // }

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

  ngOnInit(): void {}
}
