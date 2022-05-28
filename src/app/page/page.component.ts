import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  public pageData: string;
  public isPageAreaDisabled: boolean = true;
  public pageNumber: string;
  @ViewChild('pageArea') pageArea: ElementRef;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.pageNumber = params.get('pageNumber');
      this.pageData = sessionStorage.getItem(this.pageNumber);
      this.isPageAreaDisabled = true;
    });
  }
  onSave() {
    sessionStorage.setItem(this.pageNumber, this.pageData);
    this.isPageAreaDisabled = true;
  }
  onEdit() {
    this.isPageAreaDisabled = false;
    setTimeout(() => {
      this.pageArea.nativeElement.focus();
    }, 0);
  }
  onCancel() {
    this.isPageAreaDisabled = true;
    this.pageData = sessionStorage.getItem(this.pageNumber);
  }
}
