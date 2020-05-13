import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayerasComponent } from './components/playeras/playeras.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
    {path:'home',component:HomeComponent },
    {path:'productos',component:ProductosComponent },
    {path:'playeras',component:PlayerasComponent },
    {path:'contactanos',component:ContactanosComponent },
    {path:'**',pathMatch:"full",redirectTo:'home' }
    
]

export const app_routing = RouterModule.forRoot(routes);