import { Component, OnInit, Input } from '@angular/core';
import { Tech } from 'src/app/core/models';

@Component({
  selector: 'app-catalog-tech-list',
  templateUrl: './catalog-tech-list.component.html',
  styleUrls: ['./catalog-tech-list.component.css']
})
export class CatalogTechListComponent implements OnInit {

  constructor() { }

  @Input() tech: Tech[];

  ngOnInit() {
  }

}
