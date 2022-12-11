import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';



const routes: Routes = [
{
  path:'' , component:PublicComponent , 
  children:[
  {
    path: '',
    redirectTo: 'cocktail_list',
    pathMatch: 'full'
  },
  {
    path: 'cocktail_list',
    component: CocktailListComponent
  },
  {
    path: 'cocktail_detail/:id',
    component: CocktailDetailComponent
  },
]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
