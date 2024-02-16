import { Component,EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  outputs:['uemit']
})
export class HeaderComponent {
  uemit=new EventEmitter();
udata(cdata:any){
  console.log(cdata)
  this.uemit.emit(cdata)
}
}
