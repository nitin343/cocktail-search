import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { PublicRoutingModule } from './public-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';



@NgModule({
  declarations: [
    CocktailDetailComponent,
    CocktailListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
