import { Component, Input, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.page.html',
  styleUrls: ['./view-patient.page.scss'],
})
export class ViewPatientPage implements OnInit {
  @Input() patient: Patient;
  public formattedDate: any = null
  public skeletons: Array<Number> = Array(15).fill(15).map((x, i) => i);
  public loading: boolean = true

  constructor(
  ) { }

  ngOnInit() {
    this.formattedDate = DateTime.fromISO(this.patient.dob.date).toLocaleString(DateTime.DATE_SHORT)
    console.log(this.patient)
  }

  ionViewDidEnter() {
    this.loading = false
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Patients' : '';
  }
}
