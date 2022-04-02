import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';
import { DataService, Message } from '../services/data.service';
import { DateTime } from 'luxon';
import { AlertController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public dataService: DataService, public alertController: AlertController,private httpClient: HttpClient) {this.getPatients().subscribe(response => {
    this.patients = response['results'].map(patient => new Patient(patient))
      this.patients.forEach(e => {
        e.dob.date = DateTime.fromISO(e.dob.date).toLocaleString(DateTime.DATE_SHORT)
        e.name = e.name.first + " " + e.name.last
      });
  }); }

  public patients: Array<Patient> = []
  public search: boolean = false
  public searchValue: string
  public loading: boolean = true;
  public skeletons: Array<Number> = Array(15).fill(15).map((x, i) => i);
  public page: number = 1;
  public take: number = 50;
  public gender: string = null

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete()
    }, 3000);
  }

  getMessages(): Message[] {
    return this.dataService.getMessages();
  }

  ngOnInit(): void {
    this.getPatients(this.searchValue)
  }

  getPatients(queryParams = null): Observable<Patient[]> {
    queryParams = encodeURI(queryParams)
    return this.httpClient.get<Patient[]>('https://randomuser.me/api?results=50&' + queryParams)
      .pipe(
        tap(Patient => console.log('Users list received!'))
      );
  }

  async toggleSearch() {
    const alert = await this.alertController.create({
      header: 'Gender',
      inputs: [
        {
          name: 'male',
          type: 'radio',
          label: 'Male',
          value: 'male',
          handler: () => {
            this.gender = "male"
          },
        },
        {
          name: 'female',
          type: 'radio',
          label: 'Female',
          value: 'female',
          handler: () => {
            this.gender = "female"
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.gender = ""
            console.log(this.gender)
          }
        }, {
          text: 'Filter',
          handler: () => {
            var genderQuery = "gender=" + this.gender
            this.getPatients(genderQuery)
          }
        }
      ]
    });

    await alert.present();
  }

  applySearch(event) {
    var query = event.target.value.toLowerCase();
    console.log(query)
  }

}