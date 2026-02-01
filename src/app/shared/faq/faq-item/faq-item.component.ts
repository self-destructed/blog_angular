import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
} from '@angular/core';
import { FaqItem } from '../../../core/types/faq-item.type';

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqItemComponent {
  public readonly faqItem = input.required<FaqItem>();
  public expanded = model<boolean>(false);

  public open() {
    this.expanded.set(true);
  }

  public close() {
    this.expanded.set(false);
  }

  public toggle() {
    this.expanded.update((v) => !v);
  }
}
