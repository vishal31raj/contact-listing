import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import ContactsJSON from '../../assets/contacts_file.json';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Output() selectedContact: EventEmitter<any> = new EventEmitter<any>();

  contacts = [];
  searchedItem: string;
  searchAlert: boolean;
  contactNotFoundError: boolean;
  searchedContact = {};

  constructor() {
  }

  ngOnInit(): void {
    this.contacts = ContactsJSON;
  }

  // tslint:disable-next-line: typedef
  onContactSelect(contact) {
    // console.log(contact);
    this.selectedContact.emit(contact);
  }

  onSearch() {
    console.log(this.searchedItem);
    this.searchAlert = true;

    for (const contact of this.contacts) {
      if (contact["Display Name"] === this.searchedItem || contact["Home Phone"] === this.searchedItem) {
        console.log("found");
        this.searchedContact = contact;
      }
    }

    if (this.searchedContact === {}) {
      this.contactNotFoundError = true;
    }
  }

}
