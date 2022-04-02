import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../models/patient.model';
import { DataService} from '../services/data.service';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.page.html',
  styleUrls: ['./view-patient.page.scss'],
})
export class ViewPatientPage implements OnInit {
  @Input() patient: Patient;
  public formattedDate: any = null
  constructor(
  ) { }

  ngOnInit() {
    this.formattedDate = DateTime.fromISO(this.patient.dob.date).toLocaleString(DateTime.DATE_SHORT)
    console.log(this.patient)
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
