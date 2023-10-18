import { Component, OnInit,  } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = []

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Angular pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon: "pi pi-align-left",
            routerLink: "/"
          },
          {
            label: "Numeros",
            icon: "pi pi-dollar",
            routerLink:'/numbers'
          },
          {
            label: "No comunes",
            icon: "pi pi-globe",
            routerLink: "/uncommon"
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: "Custom pipes",
            icon: 'pi pi-cog',
            routerLink:"custom"
          }
        ]
      }
    ]

  }

}