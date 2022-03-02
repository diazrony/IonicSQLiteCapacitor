import { Component, OnInit } from '@angular/core';
import { StorageService } from './shared/db/StorageService';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit {

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.storageService.initDB().then(() => {
      console.log('DB en orden');
     }).catch(e => {
       console.log('Error en la db local');
     });
  }
}
