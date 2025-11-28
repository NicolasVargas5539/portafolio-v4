import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-to-up',
  imports: [],
  templateUrl: './to_up.component.html',
  styles: `
    :host {
      display: block;
    }

    .scroll-to-top {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background-color: #7c3aed;
      color: white;
      border: none;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
      opacity: 0;
      visibility: hidden;
      transform: scale(0.8);
      z-index: 99;
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
    }

    .scroll-to-top:hover {
      background-color: #6d28d9;
      transform: scale(1.1);
    }

    .scroll-to-top.visible {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }

    .scroll-to-top:active {
      transform: scale(0.95);
    }
    .scroll-to-top svg{
      fill: white;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToUpComponent {
  isVisible = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isVisible.set(scrollPosition > 100);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
