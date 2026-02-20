import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  experience = signal([
    {
      id: 1,
      title: 'Aprendiz de Sistemas',
      time: 'Marzo 2021 - Septiembre 2021 ',
      description: 'Entre mis principales funciones se encontraba brindar soporte técnico a los equipos de cómputo y apoyar a los analistas en la administración de herramientas tecnológicas como Office 365 y el servidor de la página web.',
      place: 'Uninpahu',
      animate: '500ms'
    },
    {
      id: 2,
      title: 'Auxiliar de Sistemas',
      time: 'Septiembre 2021 - marzo - 2022 ',
      description: 'Entre mis principales funciones se encontraba brindar soporte técnico a los equipos de cómputo y apoyar a los analistas en la administración de herramientas tecnológicas como Office 365. También participaba en la creación de usuarios y en tareas de administración básica de bases de datos SQL.',
      place: 'Uninpahu',
      animate: '700ms'
    },
    {
      id: 3,
      title: 'Analista de Sistemas',
      time: 'Marzo 2022 - Marzo - 2023 ',
      description: 'Entre mis principales funciones se encontraba la administración completa de los aplicativos institucionales de la universidad, así como la gestión de bases de datos. También realizaba la creación de informes, consultas (queries), triggers y otras tareas relacionadas con el manejo y optimización de información.',
      place: 'Uninpahu',
      animate: '900ms'
    },
    {
      id: 4,
      title: 'Desarrollador Web',
      time: 'Marzo 2023 - Junio 2025 ',
      description: 'Como desarrollador web, me encargaba de crear y actualizar páginas corporativas, SPA e integraciones usando WordPress y Angular. Apoyaba en la administración de servidores, hosting y dominios, garantizando estabilidad y buen rendimiento. Trabajaba en coordinación con el líder del área web, así como con los equipos de diseño y marketing, para entregar sitios funcionales, optimizados y alineados con los objetivos del proyecto.',
      place: 'Monodual',
      animate: '1100ms'
    },
    {
      id: 5,
      title: 'Lider de Desarrollo Web',
      time: 'Junio 2025 - Actualmente',
      description: 'Como líder del área web, desarrollo y administro páginas corporativas, SPA e integraciones en WordPress y Angular. Gestiono servidores, hosting y dominios, asegurando estabilidad, seguridad y buen rendimiento. Trabajo de forma autónoma, planificando y entregando proyectos en los tiempos establecidos, y colaboro con los equipos de diseño y marketing para asegurar sitios funcionales, optimizados y alineados con los objetivos de la empresa.',
      place: 'Liid by Monodual',
      animate: '1300ms'
    }
  ])
}
