import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading/loading.service';
// import * as lendersData  from '../../assets/lenders.json';
import { JsonsService } from '../jsons/jsons.service';

@Component({
  selector: 'app-home',
  templateUrl: './lenders.component.html',
  styleUrls: ['./lenders.component.scss']
})
export class LendersComponent implements OnInit {

  lendersData = null;
  retryButton = false;
  constructor(
    private loadingService: LoadingService,
    private jsonsService: JsonsService
  ) { }

  ngOnInit() {
    this.loadingService.requestStarted();
    this.loadData();
  }

  loadData() {
    this.jsonsService.getJSON()
      .subscribe(
        result => {
          let lendersInfo = result.data || null;
          if (lendersInfo) {     
            this.lendersData = lendersInfo.map(item => {
              return item.attributes;
            })
          }
        },
        error => {
          console.log(error);
          this.retryButton = true;
        },
        () => {
          this.loadingService.requestEnded();
        }
     )
  }

  reloadData() {
    this.retryButton = false;
    this.loadData();
  }
 
}
