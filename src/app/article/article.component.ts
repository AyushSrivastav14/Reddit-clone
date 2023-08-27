import { Component, HostBinding, Input, Output, EventEmitter  } from '@angular/core';
import { Article } from './article.module';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  @Input() ind: number;
  constructor(){
    this.article = new Article('', '');
    this.ind = 0;
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }


  @Output() indx = new EventEmitter();
  @Output() editEvent = new EventEmitter();

  addNewItem() {
    this.indx.emit(this.ind);
  }
  editItem(){
    this.editEvent.emit();
  }

}
