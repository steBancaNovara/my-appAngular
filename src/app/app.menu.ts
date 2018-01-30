import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSnackBar,  MatSidenavModule} from '@angular/material';
@Component({
  selector:'menu-root',
  templateUrl:'./app.menu.html',
  styleUrls:['app.menu.css']
})
export class AppMenu{
  
fillerNav=["Storia","Contatti","Home","About","Collabora","Corsi"];
constructor(public corso: MatSnackBar){}


}

