import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import {FormsModule} from '@angular/forms';
import { FirstTypePipe } from './first-type.pipe';
import { HoverStyleDirective } from './hover-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    FirstTypePipe,
    HoverStyleDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
