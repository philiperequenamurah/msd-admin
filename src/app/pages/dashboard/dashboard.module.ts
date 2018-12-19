import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { StatusTicketComponent } from './status-ticket/charts-panel.component';
import { StatusTicketChartComponent } from './status-ticket/charts/status-ticket-chart.component';
// import { StatusTicketComponent } from './status-ticket/status-ticket.component';
// import { FrontSideComponent } from './status-ticket/front-side/front-side.component';
// import { StatusBarComponent } from './status-ticket/front-side/status-bar/status-bar.component';
// import { StatusAresComponent } from './status-ticket/front-side/status-ares/status-ares.component';
// import { StatusChartsComponent } from './status-ticket/front-side/status-charts/status-charts.component';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule
  ],
  declarations: [
    DashboardComponent,
    StatusTicketComponent,
    StatusTicketChartComponent,
    // StatusBarComponent,
    // StatusAresComponent,
    // StatusChartsComponent,
  ],
})
export class DashboardModule { }
