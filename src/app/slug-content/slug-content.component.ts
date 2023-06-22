import { Component, OnInit } from '@angular/core';
import { ArticleCard } from '../articles';
import { DataService } from '../data.service';

@Component({
  selector: 'app-slug-content',
  templateUrl: './slug-content.component.html',
  styleUrls: ['./slug-content.component.css']
})
export class SlugContentComponent implements OnInit {

  articleCards: ArticleCard[] =[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getArticleCards().subscribe((cards) => {
      this.articleCards = cards;
      console.log(this.articleCards)
    });
  }

}
