// app.module.server.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module'; // Import your AppModule
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule, // Import AppModule or the module you want to use for server-side rendering
    ServerModule
    // Other modules...
  ],
  bootstrap: [AppComponent] // Specify the root component to bootstrap

})
export class AppServerModule {}
