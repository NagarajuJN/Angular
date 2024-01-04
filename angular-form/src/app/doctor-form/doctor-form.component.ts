import { Component } from '@angular/core';

import { Doctor }    from '../doctor';  

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrl: './doctor-form.component.css'
})
export class DoctorFormComponent {
  specialist = ['Cardiologists','Family Physicians','Dermatologists','Geriatric Medicine Specialist']
  model = new Doctor(18, 'Dr Bean', 21,12,'Bang',this.specialist[0]);  
  submitted = false;  
  onSubmit() { this.submitted = true; }  
  // TODO: Remove this when we're done  
  get diagnostic() { return JSON.stringify(this.model); }
  
  
  
}  


