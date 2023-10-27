import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"menu-270010","appId":"1:362919207847:web:e429a55fd593e4d8038c82","storageBucket":"menu-270010.appspot.com","apiKey":"AIzaSyD9dKJPBxw7aE_eJ_j8_N5q4QWirhmRaaU","authDomain":"menu-270010.firebaseapp.com","messagingSenderId":"362919207847","measurementId":"G-E74ND155WJ"})), provideAuth(() => getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
