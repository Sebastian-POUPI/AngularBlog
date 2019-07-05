import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  date = new Date();

  posts = [
    {
      title: "Mon Premier article",
      content: "blabla", 
      loveIts: 2,
      dontLove: 0,
      created_at: this.date
    },
    {
      title: "Mon deuxième article",
      content: "blabla blablablabla blablablabla blabla",
      loveIts: 0,
      dontLove: 0,
      created_at: this.date
    },
    {
      title: "Et encore un post",
      content: "blabla blablablabla blablablabla blablablabla blabla",
      loveIts: 0,
      dontLove: 1,
      created_at: this.date
    }
  ]

}



