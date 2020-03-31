import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HttpModule}from '@angular/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServiceYoutubeService } from './Service/service-youtube.service';
import { NabvarComponent } from './Componet/nabvar/nabvar.component';
import { HomeComponent } from './Componet/home/home.component';
import { VideosPipe } from './Pipes/videos.pipe';



@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule ],
  declarations: [ AppComponent, HelloComponent, NabvarComponent, HomeComponent, VideosPipe ],
  bootstrap:    [ AppComponent ],
  providers: [ServiceYoutubeService]
})
export class AppModule { }
