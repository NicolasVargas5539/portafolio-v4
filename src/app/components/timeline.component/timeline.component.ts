import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, QueryList, signal, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styles: `
    :host {
      display: block;
    }
    .circle{
      height: 30px;
      width: 30px;
      position: absolute;
      top: calc(50% - 14px);
    }
    /* timeline reveal animation */
    .card-time {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 600ms ease, transform 600ms ease;
    }

    .card-time.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .card-time.from-left {
      transform: translateX(-30px) translateY(20px);
    }

    .card-time.from-right {
      transform: translateX(30px) translateY(20px);
    }

    .card-time.from-left.visible,
    .card-time.from-right.visible {
      transform: translateX(0) translateY(0);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  experience = signal([
    {
      id: 1,
      title: 'Aprendiz de Sistemas',
      time: 'Marzo 2021 - marzo - 2023 ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam id ad, illo dolorum exercitationem consectetur aperiam repudiandae culpa officiis?',
      place: 'Uninpahu',
      animate: '500ms'
    },
    {
      id: 2,
      title: 'Auxiliar de Sistemas',
      time: 'Marzo 2021 - marzo - 2023 ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam id ad, illo dolorum exercitationem consectetur aperiam repudiandae culpa officiis?',
      place: 'Uninpahu',
      animate: '700ms'
    },
    {
      id: 3,
      title: 'Analista de Sistemas',
      time: 'Marzo 2021 - marzo - 2023 ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam id ad, illo dolorum exercitationem consectetur aperiam repudiandae culpa officiis?',
      place: 'Uninpahu',
      animate: '900ms'
    },
    {
      id: 4,
      title: 'Desarrollador Web',
      time: 'Marzo 2021 - marzo - 2023 ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam id ad, illo dolorum exercitationem consectetur aperiam repudiandae culpa officiis?',
      place: 'Monodual',
      animate: '1100ms'
    },
    {
      id: 5,
      title: 'Lider del area web',
      time: 'Marzo 2021 - Actualmente',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laboriosam id ad, illo dolorum exercitationem consectetur aperiam repudiandae culpa officiis?',
      place: 'Monodual',
      animate: '1300ms'
    }
  ])

  // track visibility per item
  visible = signal<Record<number, boolean>>({});

  @ViewChildren('timelineItem', { read: ElementRef })
  private timelineItems!: QueryList<ElementRef>;

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    // create observer
    this.observer = new IntersectionObserver(
      (entries) => {
        const v = { ...this.visible() };
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idAttr = el.getAttribute('data-id');
            const id = idAttr ? Number(idAttr) : NaN;
            if (!Number.isNaN(id)) {
              v[id] = true;
              // stop observing once visible
              this.observer?.unobserve(el);
            }
          }
        });
        this.visible.set(v);
      },
      { threshold: 0.15 }
    );

    // observe all items
    setTimeout(() => {
      this.timelineItems.forEach((ref) => {
        const el = ref.nativeElement as HTMLElement;
        this.observer?.observe(el);
      });
    }, 50);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
