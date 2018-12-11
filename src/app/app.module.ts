import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WichtelnComponent } from './wichteln/wichteln.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { CreatorComponent } from './creator/creator.component';
import {FormsModule} from '@angular/forms';
import {FirebaseModule, FirebaseProvider} from 'angular-firebase';
import {ClipboardModule} from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WichtelnComponent,
    PageNotFoundComponent,
    AboutComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    FirebaseModule,
    ClipboardModule
  ],
  providers: [
    FirebaseProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
