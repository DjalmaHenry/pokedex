import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['./pages.component.scss'],
  template: `
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
