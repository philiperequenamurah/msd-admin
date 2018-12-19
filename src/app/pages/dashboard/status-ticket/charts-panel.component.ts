import { Component, OnDestroy, ViewChild } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

// import { OrdersChartComponent } from './charts/orders-chart.component';
import { StatusTicketChartComponent } from './charts/status-ticket-chart.component';
// import { OrdersChart } from '../../../@core/data/orders-chart.service';
import { StatusTicketChart , StatusTicketChartService, StatusTicketService, StatusTicketChartSummary} from '../../../@core/data/status-ticket.service';
// import { OrdersProfitChartService, OrderProfitChartSummary } from '../../../@core/data/orders-profit-chart.service';

@Component({
  selector: 'msd-status-ticket',
  styleUrls: ['./charts-panel.component.scss'],
  templateUrl: './charts-panel.component.html',
})
export class StatusTicketComponent implements OnDestroy {

  private alive = true;

  chartPanelSummary: StatusTicketChartSummary[];
  period: string = 'week';
  // ordersChartData: OrdersChart;
  statusTicketChartData: StatusTicketChart;
  // @ViewChild('ordersChart') ordersChart: OrdersChartComponent;
  @ViewChild('statusTicketChart') statusTicketChart: StatusTicketChartComponent;

  constructor(private statusTicketChartService: StatusTicketService) {
    this.statusTicketChartService.getStatusTicketChartSummary()
      .pipe(takeWhile(() => this.alive))
      .subscribe((summary) => {
        this.chartPanelSummary = summary;
      });

    // this.getOrdersChartData(this.period);
    this.getProfitChartData(this.period);
  }

  setPeriodAndGetChartData(value: string): void {
    if (this.period !== value) {
      this.period = value;
    }

    this.getOrdersChartData(value);
    this.getProfitChartData(value);
  }

  changeTab(selectedTab) {
    // if (selectedTab.tabTitle === 'Profit') {
      this.statusTicketChart.resizeChart();
    // } else {
    //   this.ordersChart.resizeChart();
    // }
  }

  getOrdersChartData(period: string) {
    // this.ordersProfitChartService.getOrdersChartData(period)
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(ordersChartData => {
    //     this.ordersChartData = ordersChartData;
    //   });
  }

  getProfitChartData(period: string) {
    this.statusTicketChartService.getStatusTicketChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(statusTicketChartData => {
        this.statusTicketChartData = statusTicketChartData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
