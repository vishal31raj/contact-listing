import { Component, OnInit } from '@angular/core';
import ContactsJSON from '../../assets/contacts_file.json';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  constructor() {
    // console.log('Reading local json files');
    // console.log(ContactsJSON);
  }

  ngOnInit(): void {
  }

}
