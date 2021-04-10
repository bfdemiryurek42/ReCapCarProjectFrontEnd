import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent },
  {path:"cars", component:CarComponent },
  {path:"colors", component:ColorComponent },
  {path:"cars/color/:colorId", component:CarComponent },
  {path:"brands", component:BrandComponent },
  {path:"cars/brand/:brandId", component:CarComponent },
  {path:"cars/car-details/:id", component:CarDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
