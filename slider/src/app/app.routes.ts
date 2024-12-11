import { Routes } from '@angular/router';
import { SliderComponent } from './core/components/slider/slider.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'/Slider',
    pathMatch:'full'
  },
  {
     path:'Slider',
     component:SliderComponent
  },
];
