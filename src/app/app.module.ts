import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Servicios
//Rutas
import { app_routing } from "./app.routes";
//Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerasComponent } from './components/playeras/playeras.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { ProductosComponent } from './components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PlayerasComponent,
    ContactanosComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
