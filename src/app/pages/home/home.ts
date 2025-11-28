import { Component } from '@angular/core';
import { SwiperTech } from "../../components/swiper-tech/swiper-tech";
import { ProjectsCardComponent } from '../../components/projects-card.component/projects-card.component';
import { CardPopupComponent } from "../../components/card-popup.component/card-popup.component";
import { TimelineComponent } from "../../components/timeline.component/timeline.component";
import { NavbarComponent } from "../../components/navbar.component/navbar.component";
import { ToUpComponent } from "../../components/to_up.component/to_up.component";



@Component({
  selector: 'app-home',
  imports: [
    SwiperTech,
    ProjectsCardComponent,
    CardPopupComponent,
    TimelineComponent,
    NavbarComponent,
    ToUpComponent
],
  templateUrl: './home.html',
  styles: `
    :host {
      display: block;
    }
  `
})
export class Home {

}
