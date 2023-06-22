import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleCard } from './articles';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiBase = 'https://simply-how.herokuapp.com';
  articleCardsPath = '/article-cards';
  articlesPath = '/articles';

  constructor(private httpClient: HttpClient) { }

  getArticleCards():Observable<ArticleCard[]> {
    return this.httpClient.get<ArticleCard[]>(
      `${this.apiBase}${this.articleCardsPath}`
    );
  }
}
