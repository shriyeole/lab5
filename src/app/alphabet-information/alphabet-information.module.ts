import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlphabetInformationPageRoutingModule } from './alphabet-information-routing.module';

import { AlphabetInformationPage } from './alphabet-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlphabetInformationPageRoutingModule
  ],
  declarations: [AlphabetInformationPage]
})
export class AlphabetInformationPageModule {}
