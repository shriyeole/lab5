import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphabetInformation2Page } from './alphabet-information2.page';

const routes: Routes = [
  {
    path: '',
    component: AlphabetInformation2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlphabetInformation2PageRoutingModule {}
