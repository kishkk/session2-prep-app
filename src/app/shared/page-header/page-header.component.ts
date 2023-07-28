import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {
  @Input() title: string = 'default title';
  @Output() parentComponentNameEvent = new EventEmitter<string>();
  public currentPath: string = 'Test router name';
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  getParentComponentName() {
    this.currentPath = this.router.url;
    this.activatedRoute.url
      .subscribe(url => console.log(url));

    this.parentComponentNameEvent.emit(this.currentPath);
    console.log(this.currentPath);
  }
}
