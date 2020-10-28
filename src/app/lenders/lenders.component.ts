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
    setTimeout(() => this.loadingService.requestEnded(), 2000);
    this.loadData();

    //These are the explainations of challenges
    // axios.get('/user?ID=12345')
    //   .then(function (response) {
    //      this.loadData()
    //   })
    //   .catch(function (error) {
    //      //show the retry button
    //      this.retryButton = ture;
    //   })
    //   .then(function () {
    //      //stop loading
    //      this.loadingService.requestEnded()
    //   });
  }

  loadData() {
    this.jsonsService.getJSON().subscribe(data => {
      let lendersInfo = data.data.filter(value => value.type === 'lenders') || null;
      if (lendersInfo) {     
        this.lendersData = lendersInfo.map(item => {
          return item.attributes;
        })
      }
    })
  }

  reloadData() {
    this.retryButton = false;
    this.loadData();
  }
 
}
