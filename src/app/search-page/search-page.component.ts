import { Component, OnInit } from '@angular/core';
import { Measure } from '../models/measure.model';
import { Researcher } from '../models/researcher.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { SearchPageService } from './search-page.service';
import { getLocaleDateFormat } from '@angular/common';
import { ResearchSharedService } from '../researcher.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  providers: [SearchPageService]
})
export class SearchPageComponent implements OnInit {

  constructor(private SearchPageService:SearchPageService,private researchService: ResearchSharedService, private router: Router,private http: HttpClient) { }
  newresearcher: Researcher;
  researcher: Researcher;
  researchers: Researcher[];
  ngOnInit() {
    this.researchService.sharedResearcher.subscribe(researcher => this.researcher = researcher)
  }
  Measures: Measure[] = [new Measure('1a5fdbaa-c645-4c74-be09-f75377ece388','2020-04-17','227000','210686.407407407','100000','157','13139433.3','1072443.5','d18d456b-6860-475e-96cd-6965d0747855','Sum of Award Amount','SUM','a18d456b-6860-475e-96cd-6965d0747857','Average'),new Measure('41aac5cc-5714-44e5-ad04-1afb5481faa1','2020-04-17','227000','210686.4','150000','14010','1027958','243359.84','d18d456b-6860-475e-96cd-6965d0747856','Sum of Award Amount For NSF','SUM','b18d456b-6860-475e-96cd-6965d0747857','Average')]
  researcher1: Researcher = new Researcher('m12345678','Jon','Snoe','snoej@mail.uc.edu','Wall Tending',this.Measures);
  researcher2: Researcher = new Researcher('m43654368','Jon','Doe','doej@mail.uc.edu','Engineering',this.Measures);
  researcher3: Researcher = new Researcher('m43565658','Jon','Glow','snoej@mail.uc.edu','Engineering',this.Measures);
  getResearcher(input){
    this.SearchPageService.getResearchers(input).subscribe((data)=>{
      this.researchers = data;
    },
    err => {
      if(err){
        console.log(err.message);
      }
    });
    
  };
  getData(){
    if(this.researchers.researchers.length > 0){
      this.SearchPageService.getResearcher(this.researchers.researchers[0].mnumber).subscribe((data)=>{
        this.researchService.nextResearcher(new Researcher(data.mnumber,data.firstName,data.lastName,data.email,data.department,data.lastMeasures));
        console.log(this.researcher);
        this.router.navigate(['/','researcher'])
      },
      err => {
        if(err){
          console.log(err.message);
        }
      });
      
      
    }
  };
}
