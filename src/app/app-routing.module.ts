import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'alphabet-information',
    loadChildren: () => import('./alphabet-information/alphabet-information.module').then( m => m.AlphabetInformationPageModule)
  },
  {
    path: 'alphabet-information1',
    loadChildren: () => import('./alphabet-information1/alphabet-information1.module').then( m => m.AlphabetInformation1PageModule)
  },
  {
    path: 'alphabet-information2',
    loadChildren: () => import('./alphabet-information2/alphabet-information2.module').then( m => m.AlphabetInformation2PageModule)
  },
  {
    path: 'lessons',
    loadChildren: () => import('./lessons/lessons.module').then( m => m.LessonsPageModule)
  },
  {
    path: 'numbers',
    loadChildren: () => import('./numbers/numbers.module').then( m => m.NumbersPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
