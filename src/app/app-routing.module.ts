import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ErrorComponent } from './error/error.component';
import { ListlivresComponent } from './listlivres/listlivres.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SelectedLivreComponent } from './selected-livre/selected-livre.component';

const routes: Routes = [
  {path:'presentation',component:PresentationComponent},
  {path:'listlivres',component:ListlivresComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'listlivres/:id', component:SelectedLivreComponent},  
  {path:'',redirectTo:'presentation',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
