import { OnInit, Component, ViewChild } from '@angular/core';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { CommonService } from '../services/common.service';
import { Food } from '../shared/interfaces/food';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  componentName: string = '';
  foodList: Food[] = [];
  @ViewChild(PageHeaderComponent) header: any;
  
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.componentName = this.header.currentPath;
  }

  getComponentName($event: any) {
    this.componentName = $event;
  }

  getFoodList() {
    this.foodList = this.commonService.getFoodList();
  }
}
