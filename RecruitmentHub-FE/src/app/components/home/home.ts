import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersServiceService } from '../../services/trainers-service.service';
import { Trainer } from '../../interfaces/trainer';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class HomeComponent implements OnInit {

  trainers: Trainer[] = [];

  constructor(private trainerService: TrainersServiceService) {}

  ngOnInit(): void {
    this.loadTrainers();
  }

  loadTrainers(){
    this.trainerService.getCandidates().subscribe(data => {
      this.trainers = data;
      console.log("Trainers Loaded:", data);
    });
  }

}