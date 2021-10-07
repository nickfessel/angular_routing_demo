import { HttpClientModule, HttpParams } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute, ParamMap,convertToParamMap } from '@angular/router';
import { SpiderDetailComponent } from './spider-detail.component';
import {SpiderService} from '../spider/spider.service';
import {ApiService} from '../shared/api.service';

describe('SpiderDetailComponent', () => {
  let component: SpiderDetailComponent;
  let fixture: ComponentFixture<SpiderDetailComponent>;
  var data = Object();
  data.id = "1";

  const queryParams = new HttpParams();
  queryParams.set('type', '?');
  
  const activatedRouteMock = {
     parent: { queryParams: queryParams, snapshot: queryParams },
     snapshot: {paramMap: data}
  };
  
  const fakeRouter = {

  } as Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiderDetailComponent ],
      providers: [ {provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap( { 'id': '1' } ) } }}, SpiderService, ApiService, {provide: Router, useValue: fakeRouter}],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
