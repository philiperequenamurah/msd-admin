// import { Component, OnInit, Input, OnDestroy } from '@angular/core';

// import { NbThemeService } from '@nebular/theme';
// import { takeWhile } from 'rxjs/operators';

// @Component({
//   selector: 'msd-status-front-side',
//   templateUrl: './front-side.component.html',
//   styleUrls: ['./front-side.component.scss']
// })
// export class FrontSideComponent implements OnInit, OnDestroy {

//   private alive = true;

//   @Input() frontCardData: any;

//   currentTheme: string;

//   constructor(private themeService: NbThemeService) {
//     this.themeService.getJsTheme()
//       .pipe(takeWhile(() => this.alive))
//       .subscribe(theme => {
//         this.currentTheme = theme.name;
//     });
//   }

//   trackByDate(_, item) {
//     return item.date;
//   }

//   ngOnInit() {
//   }

//   ngOnDestroy() {
//     this.alive = false;
//   }
// }
