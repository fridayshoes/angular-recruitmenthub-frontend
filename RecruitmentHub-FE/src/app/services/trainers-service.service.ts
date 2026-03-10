import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trainer } from '../interfaces/trainer';
import { Observable } from 'rxjs';

// Marks this class as a service that can be injected anywhere in the app.
// providedIn: 'root' means Angular creates a single shared instance.
@Injectable({
  providedIn: 'root'
})
export class TrainersServiceService {

  // API endpoint for adding a trainer (POST request)
  private apiUrl = 'http://127.0.0.1:8000/trainer/add_trainer/';

  // API endpoint for retrieving all trainers (GET request)
  private getApiUrl = 'http://127.0.0.1:8000/trainer/get_trainers/';

  // Inject Angular's HttpClient to make HTTP requests
  constructor(private http: HttpClient) {}

  // Sends trainer data to the backend to create a new trainer.
  // Returns an Observable so the component can subscribe to the response.
  addCandidate(trainer: Trainer): Observable<any> {
    return this.http.post(this.apiUrl, trainer);
  }

  // Fetches a list of trainers from the backend.
  // The response is typed as Trainer[] for strong typing.
  getCandidates(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.getApiUrl);
  }

}