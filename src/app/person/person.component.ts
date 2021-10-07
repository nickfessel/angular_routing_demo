import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Person, PersonService } from './person.service';
import {TabulatorService } from '../shared/tabulator.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  people: Person[] | undefined;
  error: any;
  columns: any[] | undefined;

  constructor(private tabulatorService: TabulatorService, private location: Location, private personService: PersonService) {
  }

  ngOnInit(): void { 
    this.getPeople();
  }

  getPeople() {
    this.personService.getPeople()
      .subscribe(
        (data: Person[]) => {
          this.people = data;
          this.tabulatorService.drawTable('person-table', this.people, [], [], "200");
        },
        error => this.error = error
      );
  }
}