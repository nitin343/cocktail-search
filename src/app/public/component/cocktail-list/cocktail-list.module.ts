import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailListComponent } from './cocktail-list.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    CocktailListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    
  ]
})
export class CocktailListModule { }
