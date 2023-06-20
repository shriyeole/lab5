import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlphabetInformation2PageRoutingModule } from './alphabet-information2-routing.module';

import { AlphabetInformation2Page } from './alphabet-information2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlphabetInformation2PageRoutingModule
  ],
  declarations: [AlphabetInformation2Page]
})
export class AlphabetInformation2PageModule {}
