import { Component, OnInit } from '@angular/core';
import { PublicService } from '../public.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { map, startWith } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  constructor(
    private publicService: PublicService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: any;
  formGroup!: FormGroup;
  cocktailDbDetail: any;
  startIndex: any;
  endIndex: any;

  pagedList: any;
  length: number = 0;
  pageSize: number = 3; //displaying three cards each row
  pageSizeOptions: number[] = [3, 6, 9, 12];

  pageEvent: PageEvent | any;

  ngOnInit() {
    this.initForm();
    this.getData();
    console.log(this.filteredOptions, 'filteroption');

    this.pagedList = this.filteredOptions.slice(0, 3);
    this.length = this.filteredOptions.length;
  }

  initForm() {
    this.formGroup = this.fb.group({
      cocktailName: [''],
    });

    this.formGroup.get('cocktailName')?.valueChanges.subscribe((response) => {
      console.log(response);
      this.filterData(response);
    });
  }

  OnPageChange(event: PageEvent) {
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;

    if (this.endIndex > this.length) {
      this.endIndex = this.length;
    }
    this.pagedList = this.filteredOptions.slice(this.startIndex, this.endIndex);
  }

  filterData(response: any) {
    this.filteredOptions = this.cocktailDbDetail.filter((item: any) => {
      return item.strDrink.toLowerCase().indexOf(response.toLowerCase()) > -1;
    });
    console.log(this.startIndex);
    console.log(this.endIndex);
    this.pagedList = this.filteredOptions.slice(0, 3);
    this.length = this.filteredOptions.length;
  }

  getData() {
    this.publicService.cocktailDb().subscribe((res) => {
      console.log(res.drinks);
      this.cocktailDbDetail = JSON.parse(JSON.stringify(res.drinks));
      this.filteredOptions = JSON.parse(JSON.stringify(res.drinks));
      this.pagedList = this.filteredOptions.slice(0, 3);
      this.length = this.filteredOptions.length;
      // this.pagedList = this.filteredOptions.slice(1, 3);
    });
  }

  productDetail(data: any) {
    if (data) {
      this.router.navigate([`cocktail_detail/${data}`], {
        relativeTo: this.route.parent,
        state: {
          cocktail: data,
        },
      });
    }
  }
}
