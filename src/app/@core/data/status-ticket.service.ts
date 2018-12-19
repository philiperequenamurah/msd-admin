import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { PeriodsService } from './periods.service';

export class StatusTicketChart {
  chartLabel: string[];
  data: number[][];
}

@Injectable()
export class StatusTicketChartService {

  private year = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
  ];

  private data = { };

  constructor(private period: PeriodsService) {
    this.data = {
      week: this.getDataForWeekPeriod(),
      month: this.getDataForMonthPeriod(),
      year: this.getDataForYearPeriod(),
    };
  }

  private getDataForWeekPeriod(): StatusTicketChart {
    const nPoint = this.period.getWeeks().length;
    var returnData = new StatusTicketChart();
    returnData.chartLabel = this.period.getWeeks();
    returnData.data = [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ];
      
    return returnData;
  }

  private getDataForMonthPeriod(): StatusTicketChart {
    const nPoint = this.period.getMonths().length;

    return {
      chartLabel: this.period.getMonths(),
      data: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getDataForYearPeriod(): StatusTicketChart {
    const nPoint = this.year.length;

    return {
      chartLabel: this.year,
      data: [
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
        this.getRandomData(nPoint),
      ],
    };
  }

  private getRandomData(nPoints: number): number[] {
    return Array.from(Array(nPoints)).map(() => {
      return Math.round(Math.random() * 500);
    });
  }

  getProfitChartData(period: string): StatusTicketChart {
    return this.data[period];
  }
}

export class StatusTicketChartSummary {
  title: string;
  value: number;
}

@Injectable()
export class StatusTicketService {

  private summary = [
    {
      title: 'Marketplace',
      value: 3654,
    },
    {
      title: 'Last Month',
      value: 946,
    },
    {
      title: 'Last Week',
      value: 654,
    },
    {
      title: 'Today',
      value: 230,
    },
  ];

  constructor(private statusTicketChartService: StatusTicketChartService) {
  }

  getStatusTicketChartSummary(): Observable<StatusTicketChartSummary[]> {
    return observableOf(this.summary);
  }

  getStatusTicketChartData(period: string): Observable<StatusTicketChart> {
    return observableOf(this.statusTicketChartService.getProfitChartData(period));
  }
}
