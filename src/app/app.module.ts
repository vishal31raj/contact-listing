import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
