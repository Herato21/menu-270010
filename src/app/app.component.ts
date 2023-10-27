import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/landing', icon: 'home' },
    { title: 'Galería', url: '/galeria', icon: 'images' },
    { title: 'Nosotros', url: '/nosotros', icon: 'people' },
    { title: 'Contacto', url: '/contacto', icon: 'call' },
    { title: 'Perfil', url: '/perfil', icon: 'person-circle' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Registro', url: '/signup', icon: 'person-add' },
    { title: 'Restablecer contraseña', url: '/reset-password', icon: 'document-lock' },
    { title: 'Restablecer contraseña', url: '/reset-password', icon: 'key' },
  ];
  public labels = [];
  constructor() {}
}
