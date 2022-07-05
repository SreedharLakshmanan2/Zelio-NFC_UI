import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit { 
  selectedSignal = 'A-AT'
 lists: Array<string> = ["A",'AB','AC','AD','B-Ht','L-Lt']
  constructor(private pickerCtrl: PickerController) { }

  ngOnInit() {}
  
  onClick(){
console.log('Success')
  }

  async openPicker() {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'ControlSignal',
          options: [
            {
              text: 'A-At',
              value: 'A-At',
            },
            {
              text: 'Ac',
              value: 'Ac',
            },
            {
              text: 'Ad',
              value: 'Ad',
            },
            {
              text: 'Ah',
              value: 'Ah',
            },
            {
              text: 'Ak',
              value: 'Ak',
            },
            {
              text: 'B',
              value: 'B',
            },
            {
              text: 'Bw',
              value: 'Bw',
            },
            {
              text: 'C',
              value: 'C',
            },
            {
              text: 'D-Dt',
              value: 'D-Dt',
            },
            {
              text: 'Di-Dit',
              value: 'Di-Dit',
            },
            {
              text: 'H-Ht',
              value: 'H-Ht',
            },
            {
              text: 'L-Lt',
              value: 'L-Lt',
            },
            {
              text: 'Li-Lit',
              value: 'Li-Lit',
            },
            {
              text: 'N',
              value: 'N',
            },
            {
              text: 'O',
              value: 'O',
            },
            {
              text: 'P-Pt',
              value: 'P-Pt',
            },
            {
              text: 'Tl',
              value: 'Tl',
            },
            {
              text: 'Tt',
              value: 'Tt',
            },
            {
              text: 'W',
              value: 'W',
            },
            {
              text: 'Qt-Qtt',
              value: 'Qt-Qtt',
            },

          ],
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {
            window.alert(`You selected: ${value.ControlSignal.value}`);
            this.selectedSignal = value.ControlSignal.value
          },
        },
      ],
    });

    await picker.present();
  }
}
