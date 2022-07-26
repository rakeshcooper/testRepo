import { Component } from '@angular/core';
import { AnimalsService } from './core/services/http/animals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazon-ec2-toggle';
  constructor(private animalService: AnimalsService) {

  }
  data: any;
  cron_expression = null;
  time_components: any = null;
  EC2_timer: any = null;
  time: any = null
  ngOnInit() {
  }
  getAnimals() {
    this.animalService.get()
      .subscribe((resp: any) => {
        this.data = resp.data
        const middle_ware_data = resp.middle_ware_data
        this.EC2_timer = middle_ware_data.EC2_timer
        this.cron_expression = middle_ware_data.cron_expression
        this.time_components = middle_ware_data.time_components
        this.time = middle_ware_data.time

      }, err => {
        this.data = null;
      })
  }
}
