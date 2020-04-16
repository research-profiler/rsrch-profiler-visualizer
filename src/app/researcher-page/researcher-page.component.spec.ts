import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearcherPageComponent } from './researcher-page.component';

describe('ResearcherPageComponent', () => {
  let component: ResearcherPageComponent;
  let fixture: ComponentFixture<ResearcherPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearcherPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearcherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
