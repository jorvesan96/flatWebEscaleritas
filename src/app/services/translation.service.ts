import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  selectedLanguage: string = 'es'; // Idioma predeterminado
  languages: string[] = ['es', 'en']; // Idiomas disponibles

  constructor(private translateService: TranslateService) {
    // Establece el idioma predeterminado al iniciar la aplicación
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  // Cambia el idioma de la aplicación
  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.translateService.use(lang);
  }

  // Obtiene la URL de la bandera basada en el idioma
  getFlagUrl(language: string): string {
    const flags: { [key: string]: string } = {
      'es': 'assets/flags/es.png',
      'en': 'assets/flags/en.png'
    };
    return flags[language] || '';
  }
}
