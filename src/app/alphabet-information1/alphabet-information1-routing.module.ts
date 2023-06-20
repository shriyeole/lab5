import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphabetInformation1Page } from './alphabet-information1.page';

const routes: Routes = [
  {
    path: '',
    component: AlphabetInformation1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlphabetInformation1PageRoutingModule {}
