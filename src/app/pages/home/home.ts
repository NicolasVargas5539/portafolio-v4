import {  Component, signal} from '@angular/core';
import { SwiperTech } from "../../components/swiper-tech/swiper-tech";



@Component({
  selector: 'app-home',
  imports: [SwiperTech],
  templateUrl: './home.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class Home {

}
