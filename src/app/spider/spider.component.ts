import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone} from "@angular/core";
import {TabulatorService } from '../shared/tabulator.service';
import { Spider, SpiderService } from './spider.service';
import { IconService } from '../shared/icon.service';

@Component({
  selector: 'app-spider',
  templateUrl: './spider.component.html',
  styleUrls: ['./spider.component.css']
})
export class SpiderComponent implements OnInit {

  spiders: any;
  error: any;
  columns: any;

  constructor(private iconService: IconService, private tabulatorService: TabulatorService, private spiderService: SpiderService, private router: Router, private zone: NgZone) {
  }

  ngOnInit(): void {
    this.getSpiders();
  }
  
  getSpiders() {
    this.spiderService.getSpiders()
      .subscribe(
        (data: Spider[]) => {
          this.spiders = data;
          var keysToIgnore = ["url","id","description","imageUrl"];
          this.columns = Array();
          this.setUpDetailColumn();
          this.tabulatorService.drawTable('spider-table', this.spiders, this.columns, keysToIgnore, "200");
        },
        error => this.error = error 
      );
  }

  private setUpDetailColumn() {
    var detailColumn = Object();
    detailColumn.title = "";
    detailColumn.width = "100";
    detailColumn.hozAlign = "center";
    detailColumn.headerSort = false;
    detailColumn.formatter = this.iconService.subjectIcon;
    detailColumn.cellClick = (e: any, cell: any) => {
      this.zone.run(() => {
        this.router.navigate(['/spiderdetail/' + cell.getData().id])
      });
    }
    this.columns.push(detailColumn);
  }
}