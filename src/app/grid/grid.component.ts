import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService } from '../service/layout.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  get options(): GridsterConfig {
    return this.layoutService.options;
  }
  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }
  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
  }

}
