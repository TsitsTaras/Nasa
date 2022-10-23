import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Curiosity, Opportunity, Spirit } from './config/nasa.config';
import { NasaCamera, NasaImages, NasaRovers } from './models/models';
import { HttpService } from './services/http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  formGroup!: FormGroup;
  activeRover = 'curiosity';
  data: NasaImages[] = [];
  activeIndex: number | null = 0;
  pageNumber: number = 1;
  rovers: NasaRovers[] = [
    { title: 'Curiosity', value: 'curiosity' },
    { title: 'Opportunity', value: 'opportunity' },
    { title: 'Spirit', value: 'spirit' },
  ];
  camera: NasaCamera[] = Curiosity;
  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      camera: new FormControl('FHAZ'),
      sol: new FormControl(2000),
    });
    this.updateImages();
    this.formGroup.valueChanges.subscribe((value) => {
      this.pageNumber = 1;
      this.updateImages();
    });
  }
  onUpdateRover(i: number) {
    this.activeIndex = i;
    this.activeRover = this.rovers[i].value;
    this.updateCamera();
    this.updateImages();
  }
  updateImages() {
    const params = {
      rover: this.activeRover,
      camera: this.formGroup.value.camera,
      sol: this.formGroup.value.sol,
      page: 1,
    };
    this.service.getImages(params).subscribe((res: any) => {
      this.data = res.photos;
    });
  }
  updateCamera() {
    switch (this.activeRover) {
      case 'Curiosity':
        this.camera = Curiosity;
        break;
      case 'Opportunity':
        this.camera = Opportunity;
        break;
      case 'Spirit':
        this.camera = Spirit;
        break;
    }
    this.formGroup.get('camera')?.setValue(this.camera[0].value);
  }
  onLoadMore() {
    this.pageNumber = this.pageNumber + 1;
    const params = {
      rover: this.activeRover,
      camera: this.formGroup.value.camera,
      sol: this.formGroup.value.sol,
      page: this.pageNumber,
    };
    this.service.getImages(params).subscribe((res: any) => {
      this.data = [...this.data, ...res.photos];
    });
  }
}
