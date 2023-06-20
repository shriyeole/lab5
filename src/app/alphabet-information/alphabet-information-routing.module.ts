import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphabetInformationPage } from './alphabet-information.page';

const routes: Routes = [
  {
    path: '',
    component: AlphabetInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlphabetInformationPageRoutingModule {}
