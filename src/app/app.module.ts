import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { ResearcherPageComponent } from './researcher-page/researcher-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { Researcher } from './models/researcher.model';
import { Measure } from './models/measure.model';
import { SearchPageService } from './search-page/search-page.service';
import { ResearchSharedService } from './researcher.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResearcherPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ChartsModule,
    ScrollToModule.forRoot(),
  ],
  providers: [ResearchSharedService,SearchPageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  

}
