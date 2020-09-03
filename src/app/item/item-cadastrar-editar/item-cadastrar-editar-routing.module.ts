import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemCadastrarEditarComponent } from "./item-cadastrar-editar/item-cadastrar-editar.component";
import { ItemResolverService } from "./item-resolver.service";

const routes: Routes = [
    {
        path: "",
        component: ItemCadastrarEditarComponent,
        resolve: {
            item: ItemResolverService,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ItemCadastrarEditarRoutingModule {}
