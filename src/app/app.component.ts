import { Component, Renderer2 } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2
  ) { }

  // chamando o template/modelo
  ngAfterViewInit() {
    this.themeService.applyMatTheme(this.renderer)
  }
}
