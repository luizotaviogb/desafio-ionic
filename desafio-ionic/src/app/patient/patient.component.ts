import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Patient } from '../models/patient.model';
import { ViewPatientPage } from '../view-patient/view-patient.page';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  @Input() patient: Patient;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  async showPatientProfile(patient: Patient) {
    const modal = await this.modalController.create({
        component: ViewPatientPage,
        cssClass: 'person-profile-modal',
        componentProps: {
            patient: patient
        }
    });
    await modal.present();
}
}
