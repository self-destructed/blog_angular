import { Component } from '@angular/core';
import { FaqItemComponent } from './shared/faq/faq-item/faq-item.component';
import { FaqItem } from './core/types/faq-item.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaqItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blog_angular';
  faq: FaqItem = {
    question: 'is there have any option for write blog?',
    answer:
      'Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about',
  };

  cb() {
    console.log(2);
  }
}
