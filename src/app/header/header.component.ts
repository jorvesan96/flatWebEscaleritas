import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  languages = ['English', 'Spanish'];
  selectedLanguage = 'English';

  changeLanguage(event: Event): void {
    const target = event.target as HTMLSelectElement | null;

    if (target) {
      const selectedLanguage = target.value;
      console.log('Selected language:', selectedLanguage);
      // Lógica para cambiar el idioma
    }
  }
}
