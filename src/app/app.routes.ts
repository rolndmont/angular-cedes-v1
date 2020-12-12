import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SeminariesComponent } from "./components/seminaries/seminaries.component";
import { GeneralitiesComponent } from "./components/generalities/generalities.component";
import { NotesComponent } from "./components/notes/notes.component";
import { InvestigationComponent } from "./components/investigation/investigation.component";
import { LinksComponent } from "./components/links/links.component";
import { DetailsComponent } from "./components/generalities/details/details.component";
import { DetailRegionComponent } from './components/generalities/detail-region/detail-region.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'seminaries', component: SeminariesComponent },
    { path: 'generalities', component: GeneralitiesComponent },
    { path: 'notes', component: NotesComponent },
    { path: 'investigation', component: InvestigationComponent },
    { path: 'links', component: LinksComponent },
    { path: 'generalities/details/:idR/:id', component: DetailsComponent },
    { path: 'investigation/:url', component: InvestigationComponent },   
    { path: 'generalities/detailRegion/:id', component: DetailRegionComponent },
    { path: '**' , pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);