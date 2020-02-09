import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ngx translate 
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// material
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatBadgeModule,
  MatSnackBarModule,
  MatSelectModule

} from '@angular/material';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import { TileViewComponent } from './components/tile-view/tile-view.component';
import { HeaderComponent } from './header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';






@NgModule({
  declarations: [SelectLanguageComponent, TileViewComponent, HeaderComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    //ngx translate 
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    //material modules
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    MatSelectModule,
    MatGridListModule,
    
    

  ],
  exports: [
    //Exporting ngx translate modules
    HttpClientModule,
    TranslateModule,
    // material
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    MatSnackBarModule,
    TileViewComponent,
    SelectLanguageComponent,
    HeaderComponent
  ],
  providers:[]
})
export class SharedModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}