import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicService } from '../public.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.css'],
})
export class CocktailDetailComponent implements OnInit {
  cocktailId: any;
  cocktailDetail: any;
  ingredient:any =  [];

  constructor(
    private route: ActivatedRoute,
    private publicService: PublicService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.cocktailId = params.get('id');
    });
  }

  ngOnInit(): void {
    if (this.cocktailId) {
      this.getDetails(this.cocktailId);
    }
  }

  getDetails(id: any) {
    this.publicService.getCocktailByName(id).subscribe((res) => {
      this.cocktailDetail = res.drinks[0];
      console.log('strIngredient'+1);
      
      for(let i = 1 ; i < 15 ; i++){
        let ingrdient = 'strIngredient'+i;
        let measure = 'strMeasure'+i
        if(this.cocktailDetail[ingrdient] !== null){
          this.ingredient.push({
           'ingredient': this.cocktailDetail[ingrdient],
           'measure': this.cocktailDetail[measure]
          })
        }
      }
      console.log(this.ingredient , 'ingrdient');
    });

    
  }
}
