import { GuessService } from './../guess.service';
import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
@Component({
  selector: 'guess-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  faker = faker;
  data;
  html;
  constructor(private gs: GuessService) {}

  ngOnInit(): void {
    console.log(faker);
    this.data = this.faker.helpers.createCard(); // random contact card containing many properties

    console.log(this.data);

    this.html = this.gs.guessCard(this.data);
  }
}
