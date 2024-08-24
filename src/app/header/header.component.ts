import { Component } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public translationService: TranslationService) {}

  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement; // Cast para evitar errores de tipo
    if (target) {
      const lang = target.value;
      this.translationService.changeLanguage(lang); // Llama al servicio para cambiar el idioma
    }
  }
}
