import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/component/public.component';



const appRoutes: Routes = [
{path:'' , 
 loadChildren: () => import('./public/component/public.module').then(m => m.PublicModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
