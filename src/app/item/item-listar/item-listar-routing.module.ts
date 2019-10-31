import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListarComponent } from './item-listar/item-listar.component';


const routes: Routes = [
    {path: "", component: ItemListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemListarRoutingModule { }
