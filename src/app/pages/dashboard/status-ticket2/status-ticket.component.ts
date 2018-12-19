// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { takeWhile } from 'rxjs/operators';
// import { StatusTicket, StatusTicketList, StatusTicketService, StatusTicketListService } from '../../../@core/data/status-ticket.service';

// @Component({
//   selector: 'msd-status-ticket',
//   templateUrl: './status-ticket.component.html',
//   styleUrls: ['./status-ticket.component.scss']
// })
// export class StatusTicketComponent implements OnInit, OnDestroy {


//   private alive = true;

//   statusTicketBarData: StatusTicket;
//   statusTicketListData: StatusTicketList;
//   revealed = false;
//   period: string = 'week';

//   constructor(private statusTicketListService: StatusTicketListService,
//               private statusTicketBarService: StatusTicketService) {
//     this.getStatusTicketFrontCardData(this.period);
//     this.getStatusTicketBackCardData(this.period);
//   }

//   toggleView() {
//     this.revealed = !this.revealed;
//   }

//   setPeriod(value: string): void {
//     this.getStatusTicketFrontCardData(value);
//     this.getStatusTicketBackCardData(value);
//   }

//   getStatusTicketBackCardData(period: string) {
//     this.statusTicketBarService.getStatusTicketBarData(period)
//       .pipe(takeWhile(() => this.alive ))
//       .subscribe(statusTicketBarData => {
//         this.statusTicketBarData = statusTicketBarData;
//       });
//   }

//   getStatusTicketFrontCardData(period: string) {
//     this.statusTicketListService.getStatusTicketListData(period)
//       .pipe(takeWhile(() => this.alive ))
//       .subscribe(statusTicketListData => {
//         this.statusTicketListData = statusTicketListData;
//       });
//   }

//   ngOnDestroy() {
//     this.alive = false;
//   }
//   ngOnInit() {
//   }

// }
