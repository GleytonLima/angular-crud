import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemCadastrarEditarRoutingModule } from './item-cadastrar-editar-routing.module';
import { ItemCadastrarEditarComponent } from './item-cadastrar-editar/item-cadastrar-editar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { DialogoConfirmacaoModule } from 'src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.module';

@NgModule({
    declarations: [ItemCadastrarEditarComponent],
    imports: [
        CommonModule,
        ItemCadastrarEditarRoutingModule,
        DialogoConfirmacaoModule,

        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,

        MatToolbarModule,
        MatButtonModule
    ]
})
export class ItemCadastrarEditarModule { }
