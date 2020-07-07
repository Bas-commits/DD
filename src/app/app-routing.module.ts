import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { HomeComponent } from './components/home/home.component';
import { FormMijnGegevensWijzigenComponent } from './components/form-mijn-gegevens-wijzigen/form-mijn-gegevens-wijzigen.component';

const routes: Routes = [
  {path: '', component: Pagina1Component},
  {path: 'pagina2', component: Pagina2Component},
  {path: 'form-mijn-gegevens-wijzigen', component: FormMijnGegevensWijzigenComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
