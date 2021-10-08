import { Component, OnInit } from '@angular/core';
import { Spider, SpiderService } from '../spider/spider.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spider-detail',
  templateUrl: './spider-detail.component.html',
  styleUrls: ['./spider-detail.component.css']
})

export class SpiderDetailComponent implements OnInit {
  id: any;
  error: any;
  spider: Spider | undefined;

  constructor(private route: ActivatedRoute, private spiderService: SpiderService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.showSpider();
  }
  
  back() {
    this.router.navigate(['/spiders']);
  }

  showSpider() {
    this.spiderService.getSpider(this.id)
      .subscribe(
        (data: Spider) => {
          this.spider = data;
        },
        error => this.error = error 
      );
  }
}
