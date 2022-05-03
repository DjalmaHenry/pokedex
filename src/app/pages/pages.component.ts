import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['./pages.component.scss'],
  template: `
    <section>
      <router-outlet></router-outlet>
    </section>
  `,
})
@Injectable({
  providedIn: 'root'
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
