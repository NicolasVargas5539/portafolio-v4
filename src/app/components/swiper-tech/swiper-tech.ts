import { Component, AfterViewInit, signal } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

Swiper.use([Autoplay]);

@Component({
  selector: 'app-swiper-tech',
  standalone: true,
  templateUrl: './swiper-tech.html',
  schemas: [],
  styles: `
    .mySwiper {
      width: 100%;
      height: 100%;
      padding: 20px 0 0 0;
    }

    .swiper-slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all .3s ease;
    }

    .swiper-slide img {
      max-height: 80px;
      transition: 0.3s;
      user-select: none;
      pointer-events: none;
    }
    .swiper-slide:hover{
      scale: 1.1;
      cursor: pointer;
    }
    @media(max-width: 1024px){
      .swiper-slide img {
        max-height: 50px !important;
      }
    }
  `
})
export class SwiperTech implements AfterViewInit {

  techs = signal([
    { name: 'HTML', img: './img/tech/html.png' },
    { name: 'CSS', img: './img/tech/css.png' },
    { name: 'JavaScript', img: './img/tech/js.png' },
    { name: 'TypeScript', img: './img/tech/ts.png' },
    { name: 'Bootstrap', img: './img/tech/bootstrap.png' },
    { name: 'TailwindCss', img: './img/tech/Tailwind.png' },
    { name: 'Angular', img: './img/tech/Angular.png' },
    { name: 'SQL', img: './img/tech/sql.png' },
    { name: 'WordPress', img: './img/tech/wordpress.png' },
    { name: 'GitHun', img: './img/tech/github.png' },
  ]);

  ngAfterViewInit() {
    new Swiper('.mySwiper', {
      loop: true,
      slidesPerView: 8,
      spaceBetween: 20,

      speed: 2000,
      allowTouchMove: false,

      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },

      breakpoints: {
        0: {        // móviles
          slidesPerView: 4,
          spaceBetween: 10
        },
        768: {      // tablets
          slidesPerView: 4,
          spaceBetween: 20
        },
        1024: {     // laptops
          slidesPerView: 6,
          spaceBetween: 20
        },
        1280: {     // monitores grandes
          slidesPerView: 8,
          spaceBetween: 20
        }
      }

    });
  }
}
