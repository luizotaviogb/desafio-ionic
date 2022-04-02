import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Patient } from '../models/patient.model';
import { ViewPatientPage } from '../view-patient/view-patient.page';
import { DateTime } from 'luxon';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  @Input() patient: Patient;
  public name : any = null
  public formattedDate : any = null
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.formattedDate = DateTime.fromISO(this.patient.dob.date).toLocaleString(DateTime.DATE_SHORT)
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  async showPatientProfile(patient: Patient) {
    const modal = await this.modalController.create({
        component: ViewPatientPage,
        componentProps: {
            patient: patient
        },
        breakpoints: [0, 0.2, 0.5, 1],
          initialBreakpoint: 0.8,
    });
    await modal.present();
}
}
