import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';

const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
  {
    path: 'portfolio', component: CardComponent, pathMatch: 'prefix', children: [
      { path: ':id', component: CardComponent, pathMatch: 'prefix' },
      { path: ':id/:token', component: CardComponent, pathMatch: 'prefix' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
