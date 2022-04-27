import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() number: number = 0;
  @Input() types: any[] = [];
  @Input() image: string = '';
  constructor() {}

  ngOnInit(): void {}
}
