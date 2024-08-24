import { Component } from '@angular/core';
import { TranslationService } from './services/translation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flatWebEscaleritas';
  constructor(public  translationService: TranslationService) {}
    changeLanguage(lang: string) {
      this.translationService.changeLanguage(lang);
    }
}
