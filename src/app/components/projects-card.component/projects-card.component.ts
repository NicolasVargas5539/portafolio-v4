import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface projects {
  id: number,
  imgUrl: string,
  title: string,
  description: string,
  tech: techProjects[],
  deploy?: string
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
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
      deploy: 'Wordpress'
    },
    {
      id: 2,
      imgUrl: 'congreso-angelman',
      title: 'Congreso Angelman',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
      deploy: 'Wordpress'
    },
    {
      id: 3,
      imgUrl: 'archkckcs',
      title: 'Archkckcs',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
      deploy: 'Wordpress'
    },
    {
      id: 4,
      imgUrl: 'bishopmiege',
      title: 'Bishopmiege',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
      deploy: 'Wordpress'
    },
    {
      id: 5,
      imgUrl: 'mineros50',
      title: '50 Años de mineros',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
      deploy: 'Angular'
    },

    {
      id: 6,
      imgUrl: 'ciberguardianes',
      title: 'Ciber Guardianes',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
      deploy: 'Angular'
    },
    {
      id: 7,
      imgUrl: 'simposio-prader',
      title: 'Simposio internacional prader willi',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
      deploy: 'Codigo'
    },

    {
      id: 8,
      imgUrl: 'boomerang',
      title: 'Boomerang',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
      deploy: 'Angular'
    },
    {
      id: 9,
      imgUrl: 'brinsa30',
      title: 'Los 30 de Brinsa',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
      deploy: 'Angular'
    },
    {
      id: 10,
      imgUrl: 'gracias-gas',
      title: 'Gracias Al Gas',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
      deploy: 'Wordpress'
    },
    {
      id: 11,
      imgUrl: 'mision-latidos',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
      deploy: 'Codigo'
    },
    {
      id: 12,
      imgUrl: 'volver-a-lo-simple',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
      deploy: 'Codigo'
    },
    {
      id: 13,
      imgUrl: 'paz-del-rio',
      title: '75 años de paz del rio',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora minus, aut expedita sapiente facilis distinctio! Architecto reiciendis fugiat delectus.',
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
