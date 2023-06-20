import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlphabetInformation1PageRoutingModule } from './alphabet-information1-routing.module';

import { AlphabetInformation1Page } from './alphabet-information1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlphabetInformation1PageRoutingModule
  ],
  declarations: [AlphabetInformation1Page]
})
export class AlphabetInformation1PageModule {}
