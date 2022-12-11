import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailDetailComponent } from './cocktail-detail.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CocktailDetailComponent,
    SharedModule
  ],
  imports: [
    CommonModule
  ]
})
export class CocktailDetailModule { }
