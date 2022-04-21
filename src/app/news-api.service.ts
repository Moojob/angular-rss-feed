import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = ' https://www.lemonde.fr/rss/en_continu.xml'
  
  constructor(private http: HttpClient) { }


  initSources() {
	 return this.http.get('https://www.lemonde.fr/rss/en_continu.xml ' + this.api_key);
  }


  initArticles() {
   return this.http.get('https://www.lemonde.fr/rss/en_continu.xml ' + this.api_key);
  }

  getArticlesByID(source: String) {
   return this.http.get('https://www.lemonde.fr/rss/en_continu.xml ' + source +' &apiKey=' + this.api_key);
  }

}
