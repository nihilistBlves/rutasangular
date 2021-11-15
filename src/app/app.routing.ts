import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//NECESITAMOS IMPORTAR LOS COMPONENTES QUE VAYAMOS A NAVEGAR
import { HomeComponent } from "./components/home/home.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { CineComponent } from "./components/cine/cine.component";
import { TelevisionComponent } from "./components/television/television.component";
import { Error404Component } from "./components/error404/error404.component";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";
import { CollatzComponent } from "./components/collatz/collatz.component";
import { CocheComponent } from "./components/coche/coche.component";
import { ConcesionarioComponent } from "./components/concesionario/concesionario.component";

//DEFINIMOS EL ARRAY DE RUTAS PARA LA NAVEGACION QUE ES DE TIPO routes

const appRoutes: Routes = [
    //EN path LA BARRA YA ESTÁ IMPLÍCITA
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "concesionario", component: ConcesionarioComponent},
    {path: "coches", component: CocheComponent},
    {path: "musica", component: MusicaComponent},
    {path: "television", component: TelevisionComponent},
    {path: "cine", component: CineComponent},
    {path: "numerodoble", component: NumerodobleComponent},
    {path: "collatz/:numero", component: CollatzComponent},
    {path: "numerodoble/:numero", component: NumerodobleComponent},
    {path: "**", component: Error404Component}
];

//DE ESTA CLASE SE EXPORTAN DOS ELEMENTOS
// 1) PROVEEDOR DE RUTAS, QUE ES UN ARRAY VACIO
export const appRoutingProviders: any[] = [];
// 2) APP ROUTES
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);