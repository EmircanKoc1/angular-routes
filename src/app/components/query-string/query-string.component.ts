import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-query-string',
  standalone: true,
  imports: [],
  templateUrl: './query-string.component.html',
  styleUrl: './query-string.component.scss'
})
export class QueryStringComponent
  implements OnInit {
  activatedRoute!: ActivatedRoute;
  constructor() {
    this.activatedRoute = inject(ActivatedRoute);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(value => {
      console.log("observable params : ", value.get("color"));
    });

    let params: string = this.activatedRoute.snapshot.queryParamMap.get("color") ?? "parameter null";

    console.log(`snapshat params ${params}`);

  }

}
