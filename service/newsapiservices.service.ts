import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
  

  constructor(private http:HttpClient) { }

//newsapiurl
newsApiUrl =" https://newsapi.org/v2/top-headlines?country=in&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

//technewsapiurl
techApiUrl="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

//businessnews
businessApiUrl="https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654"




//topheading()

topHeading():Observable<any>
{
  return this.http.get(this.newsApiUrl);
}

//technews()

techNews():Observable<any>
{
  return this.http.get(this.techApiUrl);
}

//businessnews

businessNews():Observable<any>
{
  return this.http.get(this.businessApiUrl);
}

}
