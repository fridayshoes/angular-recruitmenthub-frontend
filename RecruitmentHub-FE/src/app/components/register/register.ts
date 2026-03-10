import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrainersServiceService } from '../../services/trainers-service.service';
import { Trainer } from '../../interfaces/trainer';

// Component decorator: defines how Angular should treat this class
@Component({
  selector: 'app-register',          // HTML tag used to place this component
  standalone: true,                  // Standalone component (no module needed)
  imports: [FormsModule],            // Enables ngModel for template-driven forms
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  // Inject the service that handles API calls
  constructor(private trainerService: TrainersServiceService) {}

  // Model bound to the form fields in the template
  trainer: Trainer = {
    name: '',
    contact: '',
    address: '',
    tech_stack: '',
    total_experience: 0
  };

  // Called when the user submits the form
  submitData() {
    // Send the trainer data to the backend via the service
    this.trainerService.addCandidate(this.trainer).subscribe(
      response => {
        // Runs when the API call succeeds
        console.log('Trainer registered successfully:', response);
      },
      error => {
        // Runs when the API call fails
        console.error('Error registering trainer:', error);
      }
    );
  }
}




