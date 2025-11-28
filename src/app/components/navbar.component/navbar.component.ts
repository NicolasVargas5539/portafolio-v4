import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styles: `
    :host {
      display: block;
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
    }

    .logo {
      font-size: 48px;
      font-weight: bold;
    }

    .nav-menu {
      display: flex;
      gap: 24px;
      font-size: 18px;
      color: #1f2937;
    }

    .nav-menu a {
      text-decoration: none;
      color: inherit;
      transition: color 0.3s ease;
      cursor: pointer;
    }

    .nav-menu a:hover {
      color: #7c3aed;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 6px;
      cursor: pointer;
    }

    .hamburger span {
      width: 28px;
      height: 3px;
      background-color: #1f2937;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(8px, 8px);
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }

    @media (max-width: 1023px) {
      .hamburger {
        display: flex;
      }

      .nav-menu {
        display: flex;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        flex-direction: column;
        background-color: white;
        padding: 20px;
        gap: 16px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
        z-index: 100;
      }

      .nav-menu.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }

      .navbar {
        position: relative;
        flex-wrap: wrap;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  scrollToSection(sectionId: string) {
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const navbar = (event.currentTarget as Document).querySelector('app-navbar');

    if (this.isMenuOpen() && navbar && !navbar.contains(target)) {
      this.closeMenu();
    }
  }
}
