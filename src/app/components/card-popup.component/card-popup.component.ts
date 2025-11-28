import { AfterViewInit, ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import Swiper from 'swiper';


interface Certificate {
  id: number;
  title: string;
  image: string;
}

@Component({
  selector: 'app-card-popup',
  imports: [],
  templateUrl: './card-popup.component.html',
  styles: `
    :host {
      display: block;
    }
    .mySwiper2 {
      width: 100%;
      padding: 20px 0;
    }

    .mySwiper2 .swiper-wrapper {
      display: flex;
      align-items: stretch;
    }

    .mySwiper2 .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
    }

    .certificate-card {
      width: 100%;
      background: white;
      border-radius: 12px;
      box-shadow: 0 6px 18px rgba(0,0,0,0.08);
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.25s ease;
    }

    .certificate-card:hover { transform: translateY(-6px); }

    .certificate-card img {
      width: 100%;
      object-fit: cover;
      display: block;
      user-select: none;
      pointer-events: none;
    }

    .certificate-card .title {
      padding: 12px 14px;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
    }

    .swiper-button-prev,
    .swiper-button-next { color: #7c3aed; }

    .swiper-pagination-bullet { background-color: #7c3aed; opacity: .6 }

    .swiper-pagination-bullet.swiper-pagination-bullet-active { opacity: 1 }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPopupComponent implements AfterViewInit {
  certificates = signal<Certificate[]>([
    {
      id: 1,
      title: 'Certificado de Angular',
      image: './img/certificates/Angular.jpg'
    },
    {
      id: 2,
      title: 'Certificado de CSS',
      image: './img/certificates/CSS.jpg'
    },
    {
      id: 3,
      title: 'Certificado de GitHub',
      image: './img/certificates/github.jpg'
    },
    {
      id: 4,
      title: 'Diploma de Tecnico',
      image: './img/certificates/Tecnico.jpg'
    },
    {
      id: 5,
      title: 'Diploma Ingles B2',
      image: './img/certificates/CSS.jpg'
    }
  ]);

  isPopupOpen = signal(false);
  selectedImage = signal<string>('');

  openPopup(image: string) {
    this.selectedImage.set(image);
    this.isPopupOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closePopup() {
    this.isPopupOpen.set(false);
    this.selectedImage.set('');
    document.body.style.overflow = 'auto';
  }

  onBackdropClick() {
    this.closePopup();
  }

  onImageClick(event: Event) {
    event.stopPropagation();
  }

  @HostListener('window:keydown.escape')
  onEscapeKey() {
    if (this.isPopupOpen()) {
      this.closePopup();
    }
  }
  ngAfterViewInit() {
    new Swiper('.mySwiper2', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
}
