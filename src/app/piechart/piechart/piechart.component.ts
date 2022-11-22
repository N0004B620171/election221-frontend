import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexPlotOptions,
  ApexStates,
  ApexTheme,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { Candidat } from "src/app/candidat/candidat";
import { CandidatService } from "src/app/candidat/candidat.service";

export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
  fill: any;
  stroke: any;
  states: any;
  legend: any;
  title: any;
  theme: any;
  plotOptions: any;
  dataLabels: any;
};

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})

export class PiechartComponent {
  candidats: Candidat[] = []
  candidat: Candidat
  candidat0: Candidat
  candidat1: Candidat
  candidat2: Candidat
  candidat3: Candidat
  candidat4: Candidat
  candidat5: Candidat
  resutatCandidat0: number
  resutatCandidat1: number
  resutatCandidat2: number
  resutatCandidat3: number
  resutatCandidat4: number
  resutatCandidat5: number

  err: number;
  text: any
  candidats1: Candidat[];
  ngOnInit(): void {
    this.candidatService.findAll().subscribe(
      (data) => {
        console.log(data);
        this.candidats = data
        this.candidats1 = this.candidats
        for (let index = 0; index < this.candidats1.length; index++) {
          const element = this.candidats1[index];
          if(index==0)
          {
            this.candidat0=this.candidats1[index]
            console.log(this.candidat0)

          }
          else if(index==1)
          {
            this.candidat1 = this.candidats1[index]
            console.log(this.candidat1)
          }
          else if(index==2)
          {
            this.candidat2 = this.candidats1[index]
            console.log(this.candidat2)

          }
          else if(index==3)
          {
            this.candidat3 = this.candidats1[index]
            console.log(this.candidat3)

          }
          else if(index==4)
          {
            this.candidat4 = this.candidats1[index]
            console.log(this.candidat4)

          }
          
        }
      },
      (err) => {
        this.err = 1;
      }
    );
  }
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private candidatService: CandidatService) {
    this.resutatCandidat0=218
    this.resutatCandidat1=180
    this.resutatCandidat2=91
    this.resutatCandidat3=121
    this.resutatCandidat4=71
    this.resutatCandidat5=16

    this.chartOptions = {
      series: [this.resutatCandidat0, this.resutatCandidat1, this.resutatCandidat2, this.resutatCandidat3, this.resutatCandidat4],
      chart: {
        width: 380,
        type: "donut",
        dropShadow: {
          enabled: true,
          color: "#111",
          top: -1,
          left: 3,
          blur: 3,
          opacity: 0.2
        }
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      labels: ["PASTEF", "BBY", "PDS", "REWMI", "AAR SENEGAL"],
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 0.8
        }
      },
      fill: {
        type: "pattern",
        opacity: 1,
        pattern: {
          enabled: true,
          style: [
            "verticalLines",
            "squares",
            "horizontalLines",
            "circles",
            "slantedLines"
          ]
        }
      },
      states: {
        hover: {
          filter: {
            type: "none"
          }
        }
      },
      theme: {
        palette: "palette2"
      },
      title: {
        text: "Resultat generale des elections"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
