import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconService } from '../shared/icon.service';
import { TabulatorService } from '../shared/tabulator.service';
import { SpiderService } from './spider.service';
import { SpiderComponent } from './spider.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from '../shared/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

describe('SpiderComponent', () => {
  let component: SpiderComponent;
  let fixture: ComponentFixture<SpiderComponent>;
  const fakeRouter = {

  } as Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiderComponent ],
      providers: [IconService, TabulatorService, SpiderService, ApiService, {provide: Router, useValue: fakeRouter}],
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
