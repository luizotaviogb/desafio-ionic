import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';
import { DataService, Message } from '../services/data.service';
import { DateTime } from 'luxon';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public dataService: DataService,) { }

  public patients: Array<Patient> = []

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.dataService.getMessages();
  }

  ngOnInit(): void {
    this.getPatients()
  }

  getPatients() {

    this.dataService.getPatients().then(response => {
      console.log(response)
      this.patients = response['results'].map(patient => new Patient(patient));
      this.patients.forEach(e => {
        e.dob.date = DateTime.fromISO(e.dob.date).toISODate()
      });
      console.log(this.patients)
    });
  }



}