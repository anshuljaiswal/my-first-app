import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule
    ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]

})
export class AppModule {
  // constructor(private iconService: IconService) {
  //   // Register icons with their corresponding SVG file paths
  //   icons.forEach(icon => this.iconService.addIcon(icon.name, icon.path));
  // }
}
