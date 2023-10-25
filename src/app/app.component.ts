import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Galería', url: '/galeria', icon: 'images' },
    { title: 'Nosotros', url: '/nosotros', icon: 'people-circle' },
    { title: 'Contacto', url: '/contacto', icon: 'call' },
    { title: 'Perfil', url: '/folder/trash', icon: 'person-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
