import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  private _titleLines: readonly string[];
  private _content: string;

  constructor() {
    this._titleLines = ['Fashion', 'Carnival', '2022'];
    this._content = `This is a demo site created in Angular. This has just been created recently and is still 
      a work in progress - you will see some that are not working as expected. Please feel free to shop around.`;
  }

  get titleLines() {
    return this._titleLines;
  }

  get content() {
    return this._content;
  }

}
