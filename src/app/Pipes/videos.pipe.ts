import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer } from "@angular/platform-browser";


@Pipe({
  name: 'videoPipe'
})
export class VideosPipe implements PipeTransform {

  constructor( private DS:DomSanitizer){}

  transform(value:string): any {
    let url ="https://www.youtube.com/embed/"
    return this.DS.bypassSecurityTrustResourceUrl(url+value);
  }

}