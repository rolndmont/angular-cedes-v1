import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// RUTAS
import { APP_ROUTING } from "./app.routes";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GeneralitiesComponent } from './components/generalities/generalities.component';
import { GrappchartsComponent } from './components/grappcharts/grappcharts.component';
import { InvestigationComponent } from './components/investigation/investigation.component';
import { LinksComponent } from './components/links/links.component';
import { NotesComponent } from './components/notes/notes.component';
import { SeminariesComponent } from './components/seminaries/seminaries.component';
import { LineComponent } from './components/grappcharts/line/line.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { DetailsComponent } from './components/generalities/details/details.component';

// NgxBootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';

// Charts
import { ChartsModule } from 'ng2-charts';
import { OneComponent } from './components/grappcharts/bar/one/one.component';
import { TwoComponent } from './components/grappcharts/bar/two/two.component';
// import { LineComponent } from './components/grappcharts/line/line.component';
// import { TwolineComponent } from './components/grapcharts/line/twoline/twoline.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatListModule} from '@angular/material/list';
import { DetailRegionComponent } from './components/generalities/detail-region/detail-region.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneralitiesComponent,
    InvestigationComponent,
    NotesComponent,
    LineComponent,
    SeminariesComponent,
    NavbarComponent,
    FooterComponent,
    LinksComponent,
    GrappchartsComponent,
    DetailsComponent,
    OneComponent,
    TwoComponent,
    DetailRegionComponent
    // LineComponent
    // TwolineComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    APP_ROUTING,
    MatListModule,
    ChartsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    PdfViewerModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
