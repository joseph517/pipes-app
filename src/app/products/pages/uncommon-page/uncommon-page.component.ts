import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  name:string = 'Joseph'
  gender:"male" | "female" = "male"

  public invitationMap={
    male:'invitarlo',
    female:"invitarla"
  }

  // i18nSelect
  changeClient():void{
    console.log(this.gender)
    if(this.gender==='male'){
      this.name = 'Katarina',
      this.gender = 'female'
    }else{
      console.log('hola', )
      this.name='Joseph'
      this.gender="male"
    }
  }

  // i18nPlural
  public clients:string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia']
  public clientMap={
    '=0':"no hay clientes",
    '=1':"tenemos un cliente esperando",
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift()
  }

  // json, key value
  public person = {
    name:'Joseph',
    age: 52,
    addres: 'Toronto, Canada'
  }

  // asyn
  public observableTimer:Observable<number> = interval(2000)

  public promiseValue:Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(()=>{
    resolve('Tenemos datos en promesa')
    }, 3500)
  })
}
