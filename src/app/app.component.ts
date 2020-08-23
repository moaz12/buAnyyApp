import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { AngularFireDatabase, PathReference } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'buAnyyApp';

  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }


}
