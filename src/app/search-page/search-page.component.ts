import { Component, OnInit } from '@angular/core';
import { Measure } from '../models/measure.model';
import { Researcher } from '../models/researcher.model';
import { ResearchSharedService } from '../researcher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  providers: [ResearchSharedService]
})
export class SearchPageComponent implements OnInit {

  constructor(private researchService: ResearchSharedService,private router: Router) { }
  researcher: Researcher

  ngOnInit() {
    this.researchService.sharedResearcher.subscribe(researcher => this.researcher = researcher)
  }
  Measures: Measure[] = [new Measure('1a5fdbaa-c645-4c74-be09-f75377ece388','2020-04-17','227000','210686.407407407','100000','157','13139433.3','1072443.5','d18d456b-6860-475e-96cd-6965d0747855','Sum of Award Amount','SUM','a18d456b-6860-475e-96cd-6965d0747857','Average'),new Measure('41aac5cc-5714-44e5-ad04-1afb5481faa1','2020-04-17','227000','210686.4','150000','14010','1027958','243359.84','d18d456b-6860-475e-96cd-6965d0747856','Sum of Award Amount For NSF','SUM','b18d456b-6860-475e-96cd-6965d0747857','Average')]
  researcher1: Researcher = new Researcher('m12345678','Jon','Snoe','snoej@mail.uc.edu','Wall Tending',this.Measures);
  researcher2: Researcher = new Researcher('m43654368','Jon','Doe','doej@mail.uc.edu','Engineering',this.Measures);
  researcher3: Researcher = new Researcher('m43565658','Jon','Glow','snoej@mail.uc.edu','Engineering',this.Measures);
  researchers: Researcher[] = [this.researcher1,this.researcher2,this.researcher3];
  getResearcher(input){
    for(let aResearcher of this.researchers){
      if(input == aResearcher.mnumber){
        this.researchService.nextResearcher(aResearcher);
        console.log(aResearcher);
        this.router.navigate(['/','researcher'])
      }
    }
  }
}
