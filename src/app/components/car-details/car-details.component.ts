import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails';
import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carDetail:CarDetails;
  imageUrl = 'https://localhost:44346/api/';
  dataLoaded: boolean = false;
  constructor(private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
       
        this.getCarsDetailsByCar(params['id']);
      }
    });
  }

getCarsDetailsByCar(id: number) {
    this.carService.getCarsDetailsByCar(id).subscribe((response) => {
      this.carDetail = response.data[0];
      this.dataLoaded = true;
    });
  }

  imageClassGenerate(imagePath:string){
    if (imagePath ===this.carDetail.images[0]) {
      return 'carousel-item active'
    }else{
      return 'carousel-item'
    }
  }
}
