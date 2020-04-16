import { NgModule, OnInit, ViewChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Label,Color, BaseChartDirective } from 'ng2-charts';
import {ResearcherPageComponent} from './researcher-page/researcher-page.component'
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {path: 'researcher', component: ResearcherPageComponent},
  {path: 'search', component: SearchPageComponent},
  { path: '', redirectTo: '/search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit { 
 
  constructor() { }

  ngOnInit() {
  }

}
