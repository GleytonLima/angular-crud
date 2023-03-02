import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";
import { MatLegacyPaginatorModule as MatPaginatorModule } from "@angular/material/legacy-paginator";
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from "@angular/material/legacy-progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatLegacyTableModule as MatTableModule } from "@angular/material/legacy-table";
import { MatToolbarModule } from "@angular/material/toolbar";

import { ItemListarRoutingModule } from "./item-listar-routing.module";
import { ItemListarComponent } from "./item-listar/item-listar.component";

import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    declarations: [ItemListarComponent],
    imports: [
        CommonModule,
        ItemListarRoutingModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatButtonModule,
        MatPaginatorModule,
        MatSortModule,

        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,

        FlexLayoutModule,
    ],
})
export class ItemListarModule {}
