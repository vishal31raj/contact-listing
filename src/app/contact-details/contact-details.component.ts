import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

import ContactsJSON from '../../assets/contacts_file.json';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() selectedContact;

  contacts = [];
  displayName: string;
  phoneNumber: string;

  constructor() { }

  ngOnInit(): void {
    this.contacts = ContactsJSON;
    console.log(this.contacts[0]);
    this.selectedContact = this.contacts[0];
    // this.onSelectedContact(this.contacts[0]);
  }

  // onSelectedContact(item) {
  //   // console.log(item);
  // }

  onUpdate() {
    Swal.fire('Contact Updated!');
    console.log(this.displayName, this.phoneNumber);
    this.selectedContact["Display Name"] = this.displayName;
    this.selectedContact["Home Phone"] = this.phoneNumber;
    this.displayName = '';
    this.phoneNumber = '';
  }
}
