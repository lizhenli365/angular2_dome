import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  cars: Array<Car> =[];

  constructor() { }

  ngOnInit() {
    let car = new Car();
    car.name = '李镇立';
    car.year = 23;
    car.brand = 'app';
    car.color = 'red';

    this.cars.push(car);

    console.log(this.cars);

  }
}

export class Car {
  name;
  year;
  brand;
  color;
}
