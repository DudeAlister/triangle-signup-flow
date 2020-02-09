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
import { SelectLanguageComponent } from './select-language/select-language.component';
import { TileViewComponent } from './components/tile-view/tile-view.component';






@NgModule({
  declarations: [SelectLanguageComponent, TileViewComponent],
  imports: [
    CommonModule,
    //ngx translate 
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
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
    SelectLanguageComponent
  ],
  providers:[]
})
export class SharedModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}