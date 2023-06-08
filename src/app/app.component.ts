import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

interface IconDefinition {
  name: string;
  path: string;
}

const icons: IconDefinition[] = [
  { name: 'undo-variant', path: './icons/undo-variant.svg' },
  // { name: 'icon-name-2', path: 'path/to/icon2.svg' },
  // Add more icon definitions as needed
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {}

  ngOnInit(): void {
    this.registerIcons();
  }

  private registerIcons(): void {
    icons.forEach((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
