import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { StateService } from './state.service';
import { PeriodsService } from './periods.service';
import { LayoutService } from './layout.service';
import { StatusTicketService, StatusTicketChart, StatusTicketChartService, StatusTicketChartSummary } from './status-ticket.service';

const SERVICES = [
  UserService,
  StateService,
  PeriodsService,
  LayoutService,
  StatusTicketService, 
  StatusTicketChart, 
  StatusTicketChartService, 
  StatusTicketChartSummary
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
