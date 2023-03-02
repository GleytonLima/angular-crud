import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoConfirmacaoComponent } from './dialogo-confirmacao.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@NgModule({
    declarations: [DialogoConfirmacaoComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class DialogoConfirmacaoModule { }
