import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intouch-assignment';

  contactSelected = {};
  selectedContact = {};

  onSelectedContact($event) {
    this.selectedContact = $event;
    // console.log("from app component", this.selectedContact);
    this.contactSelected = this.selectedContact;
  }
}
