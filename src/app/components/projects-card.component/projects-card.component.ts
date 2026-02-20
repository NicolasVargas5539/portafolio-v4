import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface projects {
  id: number,
  imgUrl: string,
  title: string,
  description: string,
  tech: techProjects[],
  deploy?: string,
  url?: string
}

interface techProjects {
  id: number,
  name: string
}

@Component({
  selector: 'app-projects-card',
  imports: [],
  templateUrl: './projects-card.component.html',
  styles: `
    :host {
      display: block;
    }
    .overlay {
      position: relative;
      display: inline-block;
      overflow: hidden;
    }

    .overlay img {
      display: block;
      width: 100%;
      height: auto;
      position: relative;
      z-index: 1;
    }

    .overlay::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.7);
      z-index: 2;
      transition: opacity 0.3s ease;
      opacity: 1;
    }

    .overlay:hover::after {
      opacity: 0;
    }


    .card:hover .overlay {
      background-color: rgba(0, 0, 0, 0);
    }

    .overlay img {
      display: block;
      width: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsCardComponent {
  projects = signal(<projects[]>[
    {
      id: 1,
      imgUrl: 'Liid',
      title: 'Liid Comunicación y Creatividad',
      description: 'Proyecto desarrollado a medida a partir de un diseño propuesto, con elementos personalizados como el selector de idioma y el switcher, totalmente integrados y adaptados a WordPress.',
      tech: [
        {
          id: 1,
          name: 'WordPress'
        },
        {
          id: 2,
          name: 'Elementor'
        },
        {
          id: 3,
          name: 'CSS3'
        },
      ],
      url: 'https://liidcc.com/',
      deploy: 'Wordpress'
    },
    {
      id: 2,
      imgUrl: 'congreso-angelman',
      title: 'Congreso Angelman',
      description: 'Proyecto desarrollado en WordPress con un diseño completamente a medida, SEO optimizado y un sistema de chat en vivo integrado para el streaming del evento.',
      tech: [
        {
          id: 1,
          name: 'WordPress'
        },
        {
          id: 2,
          name: 'PHP'
        },
        {
          id: 3,
          name: 'CSS3'
        },
        {
          id: 4,
          name: 'Firebase'
        },
      ],
      url: 'https://congresoangelman.com/',
      deploy: 'Wordpress'
    },
    {
      id: 3,
      imgUrl: 'archkckcs',
      title: 'Archkckcs',
      description: 'Rediseño completo de la página web y su contenido, implementando modificaciones en CSS hechas a medida y optimizadas para que el administrador pueda actualizar la información de forma sencilla.',
      tech: [
        {
          id: 1,
          name: 'WordPress'
        },
        {
          id: 2,
          name: 'Elementor'
        },
        {
          id: 2,
          name: 'CSS3'
        },
      ],
      url: 'https://archkckcs.org/',
      deploy: 'Wordpress'
    },
    {
      id: 4,
      imgUrl: 'bishopmiege',
      title: 'Bishopmiege',
      description: 'Rediseño de la página web y su contenido en WordPress utilizando Divi, con ajustes personalizados en CSS hechos a medida y optimizados para que el administrador pueda actualizar la información de forma sencilla.',
      tech: [
        {
          id: 1,
          name: 'WordPress'
        },
        {
          id: 2,
          name: 'Divi Theme'
        },
        {
          id: 3,
          name: 'CSS3'
        },
      ],
      url: 'https://bishopmiege.com/',
      deploy: 'Wordpress'
    },
    {
      id: 5,
      imgUrl: 'mineros50',
      title: '50 Años de mineros',
      description: 'Desarrollo de una página informativa en conmemoración de los 50 años de Mineros, con diseño personalizado, contenido histórico y una experiencia visual enfocada en destacar los hitos más importantes de la compañía.',
      tech: [
        {
          id: 1,
          name: 'Angular'
        },
        {
          id: 2,
          name: 'CSS3'
        },
        {
          id: 4,
          name: 'TS'
        },
        {
          id: 5,
          name: 'Firebase'
        }
      ],
      url: 'https://proyectos.liidcc.com/mineros50/',
      deploy: 'Angular'
    },

    {
      id: 6,
      imgUrl: 'ciberguardianes',
      title: 'Ciber Guardianes',
      description: 'Desarrollo de un juego tipo quiz en Angular sobre ciberseguridad, con preguntas dinámicas, retroalimentación inmediata y una interfaz interactiva para reforzar buenas prácticas digitales.',
      tech: [
        {
          id: 1,
          name: 'Angular'
        },
        {
          id: 2,
          name: 'CSS3'
        },
        {
          id: 3,
          name: 'Tailwindcss'
        },
        {
          id: 4,
          name: 'SwiperJS'
        }
      ],
      url: 'https://proyectos.liidcc.com/Ciberguardianes/',
      deploy: 'Angular'
    },
    {
      id: 7,
      imgUrl: 'simposio-prader',
      title: 'Simposio internacional prader willi',
      description: 'Desarrollo del frontend para una página web de evento, implementado en HTML, CSS y JavaScript, consumiendo la API del backend en Laravel para mostrar información dinámica y actualizada.',
      tech: [
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS3'
        },
        {
          id: 3,
          name: 'Bootstrap'
        },
        {
          id: 4,
          name: 'Firebase'
        }
      ],
      url: 'https://proyectos.liidcc.com/Simposio/public/',
      deploy: 'Codigo'
    },

    {
      id: 8,
      imgUrl: 'boomerang',
      title: 'Boomerang',
      description: 'Desarrollo de una página web en Angular como frontend del proyecto, implementando el diseño, la lógica y la estructura visual, y entregada al cliente totalmente funcional y lista para integración.',
      tech: [
        {
          id: 1,
          name: 'Angular'
        },
        {
          id: 2,
          name: 'CSS3'
        },
        {
          id: 3,
          name: 'Bootstrap'
        },
        {
          id: 4,
          name: 'TS'
        }
      ],
      url: 'https://proyectos.liidcc.com/boomerang/home',
      deploy: 'Angular'
    },
    {
      id: 9,
      imgUrl: 'brinsa30',
      title: 'Los 30 de Brinsa',
      description: 'Desarrollo de una página informativa en conmemoración de los 30 años de Brinsa, con diseño a medida y una experiencia visual enfocada en resaltar los logros e hitos más importantes de la compañía.',
      tech: [
        {
          id: 1,
          name: 'Angular'
        },
        {
          id: 2,
          name: 'CSS3'
        },
        {
          id: 3,
          name: 'Bootstrap'
        },
        {
          id: 4,
          name: 'SwiperJS'
        }
      ],
      url: 'https://proyectos.liidcc.com/brinsa30/inicio',
      deploy: 'Angular'
    },
    {
      id: 10,
      imgUrl: 'gracias-gas',
      title: 'Gracias Al Gas',
      description: 'Desarrollo de una página web en WordPress con elementos personalizados hechos a medida, integrando funcionalidades específicas y un diseño adaptable a las necesidades del cliente.',
      tech: [
        {
          id: 1,
          name: 'Wordpress'
        },
        {
          id: 2,
          name: 'Elementor'
        },
        {
          id: 3,
          name: 'CSS3'
        },
        {
          id: 4,
          name: 'PHP'
        }
      ],
      url: 'https://proyectos.liidcc.com/gracias-al-gas/',
      deploy: 'Wordpress'
    },
    {
      id: 11,
      imgUrl: 'mision-latidos',
      title: 'Mision Latidos Brinsa',
      description: 'Desarrollo de la página Misión Latidos utilizando HTML, CSS y JavaScript, con un diseño a medida y funcionalidades personalizadas para una experiencia clara y dinámica.',
      tech: [
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS'
        },
        {
          id: 2,
          name: 'JS'
        }
      ],
      url: 'https://proyectos.liidcc.com/Mision-latidos-brinsa/',
      deploy: 'Codigo'
    },
    {
      id: 12,
      imgUrl: 'volver-a-lo-simple',
      title: 'Volver a lo simple',
      description: 'Desarrollo de la página Misión Latidos en HTML, CSS y JavaScript, con diseño a medida e integración de funcionalidades avanzadas, incluyendo el uso de la cámara web para una experiencia interactiva.',
      tech: [
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS'
        },
        {
          id: 2,
          name: 'JS'
        }
      ],
      url: 'https://proyectos.liidcc.com/volver-a-lo-simple-sodexo/',
      deploy: 'Codigo'
    },
    {
      id: 13,
      imgUrl: 'paz-del-rio',
      title: '75 años de paz del rio',
      description: 'Desarrollo de una página conmemorativa por los 75 años de Paz del Río, creada en HTML, CSS y JavaScript, con un diseño a medida y una experiencia visual enfocada en resaltar la historia y los hitos de la compañía.',
      tech: [
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS'
        },
        {
          id: 2,
          name: 'JS'
        }
      ],
      url: 'https://proyectos.liidcc.com/paz-del-rio/',
      deploy: 'Codigo'
    },
  ]);

  // Signal para controlar cuántos proyectos mostrar
  displayCount = signal(6);

  // Signal computado para obtener los proyectos a mostrar
  visibleProjects = computed(() => {
    return this.projects().slice(0, this.displayCount());
  });

  // Signal computado para saber si hay más proyectos
  hasMoreProjects = computed(() => {
    return this.projects().length > this.displayCount();
  });

  // Método para cargar más proyectos
  loadMoreProjects() {
    const currentCount = this.displayCount();
    const totalProjects = this.projects().length;
    const newCount = Math.min(currentCount + 6, totalProjects);
    this.displayCount.set(newCount);
  }
}
