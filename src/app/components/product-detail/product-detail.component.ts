import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

    
    activatedRoute.paramMap.subscribe(value => {
      console.log(value.get("id"));

    });

  }
  ngOnInit(): void {

    let hasId: boolean = this.activatedRoute.snapshot.paramMap.has("id");
    console.log(hasId);
    if (hasId)
      console.log(this.activatedRoute.snapshot.paramMap.get("id"));

  }

}
