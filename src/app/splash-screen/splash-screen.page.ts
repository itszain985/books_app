import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element';
register();
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  // slideOpts = {
  //   initialSlide: 0,
  //   speed: 400,
  //   autoplay: {
  //     delay: 3000,
  //   },
  //   loop: true,
  // };
  // slideOpts = {
  //   loop: true,
  //   autoplay: {
  //     delay: 3000,
  //   },
  //   pagination: true,
  // };
}
