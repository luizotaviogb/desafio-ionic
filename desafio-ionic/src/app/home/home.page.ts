import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient.model';
import { DataService } from '../services/data.service';
import { DateTime } from 'luxon';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public dataService: DataService, public alertController: AlertController, private httpClient: HttpClient) {

  }

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

  ngOnInit(): void {
    this.concatPatients()
  }

  getPatients(queryParams: string = null): Observable<Patient[]> {
    queryParams = encodeURI(queryParams)
    return this.httpClient.get<Patient[]>('https://randomuser.me/api?results=50&' + queryParams)
      .pipe(
        tap(Patient => console.log('Users list received!'))
      );
  }

  concatPatients(queryParams: string = null, ionRefresher: any = null, ionInfiniteScroll: any = null){

    if (ionRefresher !== null || 
      (ionRefresher == null && ionInfiniteScroll == null) ||
      this.searchValue
   ) {
       this.resetList();
   }
   queryParams = "gender=" + queryParams
    this.getPatients(queryParams).subscribe(response => {
      this.patients = this.patients.concat ( response['results'].map(patient => new Patient(patient)))
      this.page++;

            if (ionInfiniteScroll) {
                ionInfiniteScroll.target.complete();
            }
            
            if (ionRefresher) {
                ionRefresher.target.complete();
            }
            
            this.loading = false;

      this.loading = false
    });
  }
  resetList() {
    this.patients = [];
    this.page = 1;
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
        },
        {
          name: 'any',
          type: 'radio',
          label: 'Any',
          value: 'Any',
          handler: () => {
            this.gender = ""
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
            this.concatPatients(this.gender)
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