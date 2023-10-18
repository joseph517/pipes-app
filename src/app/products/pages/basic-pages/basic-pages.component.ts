import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrls: ['./basic-pages.component.css']
})
export class BasicPagesComponent {
  public name: string = 'Hola mundo'
  public customDate: Date = new Date

}
