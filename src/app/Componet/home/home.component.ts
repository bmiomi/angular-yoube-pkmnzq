import { Component, OnInit } from '@angular/core';
import { ServiceYoutubeService } from '../../Service/service-youtube.service';

declare var $:any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos:any[]=[]
  videoS:any

  constructor( public servicio:ServiceYoutubeService) {

      this.servicio.getvideos().subscribe(
        (resp)=>{
          this.videos=resp
          console.log(this.videos)
        }
      )

   }

  ngOnInit() {
  }

cargarmas(){
    this.servicio.getvideos().subscribe(_videos=>this.videos.push.apply(this.videos,_videos))
}
  Ver_video( video:any ){

    this.videoS=video
    console.log(video)
    $('#exampleModal').modal();
  }

  cerrar(){    
    this.videoS=null
    $('#exampleModal').modal();
  }
}