import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { Measure } from '../models/measure.model';
import { Researcher } from '../models/researcher.model';
import { ResearchSharedService } from '../researcher.service';

@Component({
  selector: 'app-researcher-page',
  templateUrl: './researcher-page.component.html',
  styleUrls: ['./researcher-page.component.scss'],
  providers: [ResearchSharedService]
})
export class ResearcherPageComponent implements OnInit {
  
  constructor(private researchService: ResearchSharedService) { }
  researcher: Researcher;
  barChartLabel1: string;
  barChartData1: ChartDataSets[];
  barChartLabels1: Label[];
  barChartLabel2: string;
  barChartData2: ChartDataSets[];
  barChartLabels2: Label[];
  barChartLabel3: string;
  barChartData3: ChartDataSets[];
  barChartLabels3: Label[];
  barChartLabel4: string;
  barChartData4: ChartDataSets[];
  barChartLabels4: Label[];
  ngOnInit() {
    this.researchService.sharedResearcher.subscribe(researcher => this.researcher = researcher);
    this.barChartData1 = [
      { data: [Number(this.researcher.measures[0].globalMin)], label: 'Min',backgroundColor: '#87BCDE', hoverBackgroundColor:'#87BCDE', borderColor: '#87BCDE' },
      { data: [Number(this.researcher.measures[0].globalMean)], label: 'Average',backgroundColor: '#D00000', hoverBackgroundColor:'#D00000', borderColor: '#D00000' },
      { data: [Number(this.researcher.measures[0].value)], label: 'Researcher Value',backgroundColor: '#FFBA08', hoverBackgroundColor:'#FFBA08', borderColor: '#FFBA08' },
      { data: [Number(this.researcher.measures[0].globalMax)], label: 'Max',backgroundColor: '#3F88C5', hoverBackgroundColor:'#3F88C5', borderColor: '#3F88C5' }
    ];
    this.barChartLabels1 = [this.researcher.measures[0].aggregateName]
    this.barChartData2 = [
      { data: [Number(this.researcher.measures[1].globalMin)], label: 'Min',backgroundColor: '#87BCDE', hoverBackgroundColor:'#87BCDE', borderColor: '#87BCDE'  },
      { data: [Number(this.researcher.measures[1].globalMean)], label: 'Average',backgroundColor: '#D00000', hoverBackgroundColor:'#D00000', borderColor: '#D00000'  },
      { data: [Number(this.researcher.measures[1].value)], label: 'Researcher Value',backgroundColor: '#FFBA08', hoverBackgroundColor:'#FFBA08', borderColor: '#FFBA08'  },
      { data: [Number(this.researcher.measures[1].globalMax)], label: 'Max',backgroundColor: '#3F88C5', hoverBackgroundColor:'#3F88C5', borderColor: '#3F88C5'  }
    ];
    this.barChartLabels2 = [this.researcher.measures[1].aggregateName]
    this.barChartData3 = [
      { data: [75000], label: 'Well Below Average', stack: 'a',backgroundColor: '#87BCDE', hoverBackgroundColor:'#87BCDE', borderColor: '#87BCDE' },
      { data: [150000], label: 'Below Average', stack: 'a',backgroundColor: '#D00000', hoverBackgroundColor:'#D00000', borderColor: '#D00000' },
      { data: [225000], label: 'Average', stack: 'a' ,backgroundColor: '#FFBA08', hoverBackgroundColor:'#FFBA08', borderColor: '#FFBA08'},
      { data: [500000], label: 'Above Average', stack: 'a',backgroundColor: '#3F88C5', hoverBackgroundColor:'#3F88C5', borderColor: '#3F88C5' }
    ];
    this.barChartLabels3 = ['Thresholds: Award Amount']
    this.barChartData4 = [
      { data: [75000], label: 'Well Below Average', stack: 'a',backgroundColor: '#87BCDE', hoverBackgroundColor:'#87BCDE', borderColor: '#87BCDE' },
      { data: [150000], label: 'Below Average', stack: 'a',backgroundColor: '#D00000', hoverBackgroundColor:'#D00000', borderColor: '#D00000' },
      { data: [225000], label: 'Average', stack: 'a' ,backgroundColor: '#FFBA08', hoverBackgroundColor:'#FFBA08', borderColor: '#FFBA08'},
      { data: [500000], label: 'Above Average', stack: 'a',backgroundColor: '#3F88C5', hoverBackgroundColor:'#3F88C5', borderColor: '#3F88C5' }
    ];
    this.barChartLabels4 = ['Thresholds: NSF Award Amount']
  }
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Amount($)',
    },
    type: 'logarithmic',
    position: 'left',
    ticks: {
         min: 1, //minimum tick
         max: 1000000000, //maximum tick
         callback: function (value, index, values) {
            return Number(value.toString());//pass tick values as a string into Number function
         }
    },
    afterBuildTicks:  function (chartObj) { //Build ticks labelling as per your need
        chartObj.ticks = [];
        chartObj.ticks.push(1);
        chartObj.ticks.push(10);
        chartObj.ticks.push(100);
        chartObj.ticks.push(1000);
        chartObj.ticks.push(10000);
        chartObj.ticks.push(100000);
        chartObj.ticks.push(1000000);
        chartObj.ticks.push(10000000);
        chartObj.ticks.push(100000000);
        chartObj.ticks.push(1000000000);
    }
    }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartOptions2: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartType2: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData1[0].data = data;
  }
}
