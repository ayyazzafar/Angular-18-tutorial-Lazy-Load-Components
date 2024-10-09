import { Component, inject, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  viewContainerRef = inject(ViewContainerRef);
  advancedSettings: any;

  async loadComponentWithContainerRef() {
    const { LazyLoadedComponent } = await import(
      './lazy-loaded/lazy-loaded.component'
    );

    this.viewContainerRef.createComponent(LazyLoadedComponent)
  }

  async loadComponent() {
    this.advancedSettings = (await import('./lazy-loaded/lazy-loaded.component')).LazyLoadedComponent
  }
}
