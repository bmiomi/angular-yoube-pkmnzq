import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable()
export class ServiceYoutubeService {
  private UrlYoutbe: string = "https://www.googleapis.com/youtube/v3";
  private apikey: string = "AIzaSyDArlVDfWfR7dkfjHkRmZu65HYbjJ3pMTA";
  private play: string = "PLOPmDfV0hAMYEgC2D6CJ7MkWswclPohRj";
  private nexPageToken: string = "";

  constructor(public _http: Http) {}

  //UUuaPTYj15JSkETGnEseaFFg

  getvideos() {
    let url = `${this.UrlYoutbe}/playlistItems`;
    let params = new URLSearchParams();
    params.set("part", "snippet");
    params.set("maxResults", "10");
    params.set("playlistId", this.play);
    params.set("key", this.apikey);

    if (this.nexPageToken) {
      params.set("key", this.nexPageToken);
    }

    return this._http.get(url, { search: params }).pipe(
      map(res => {
        this.nexPageToken = res.json().nexPageToken;

        let videos: any[] = [];
        for (let video of res.json().items) {
          let snippet = video.snippet;
          videos.push(snippet);
        }
        return videos;
      })
    );
  }
}
