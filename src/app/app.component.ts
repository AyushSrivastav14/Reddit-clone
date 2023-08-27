import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  public name:string = "";
  public link:string = "";
  public selectedIndex:number = -1;
  constructor(){
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Angular Tool', 'http://angular.io', 2),
      new Article('Angular Site', 'http://angular.io', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    if(this.selectedIndex != -1){
      this.articles[this.selectedIndex].title = title.value;
      this.articles[this.selectedIndex].link = link.value;
      this.selectedIndex = -1;
    }
    else{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    
  }
    title.value = '';
    link.value ='';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a:Article, b: Article) => b.votes - a.votes)
  }
  ngOnInit(){
    
  }
  addInd(indx: number){
    this.sortedArticles().splice(indx, 1);
    this.selectedIndex = -1;
  }
  edit(index:number){
    this.selectedIndex = index;
    this.name = this.articles[index].title
    this.link = this.articles[index].link
  }
}
