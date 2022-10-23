import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.scss'],
})
export class PhotoContainerComponent implements OnInit {
  @Input() photo: any;
  constructor() {}

  ngOnInit(): void {}
}
