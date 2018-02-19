/**
 * Chamada com os modulos e componentes para que a aplicação funcione corretamente
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserPopupComponent } from './user/user-popup.component';

/**
 * Importando funcionaldidade necessária para funcionamento correto da aplicação
 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppConfirmModule } from './shared/services/app-confirm/app-confirm.module';
import { AppLoaderModule } from './shared/services/app-loader/app-loader.module';
import { ThemeService } from './shared/services/theme.service';

const appRoutes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    data: { title: 'User List' }
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
    MaterialAppModule,
    AppConfirmModule,
    AppLoaderModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' },
    ThemeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [UserPopupComponent]
})
export class AppModule { }
