import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoConfirmacaoComponent } from './dialogo-confirmacao.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [DialogoConfirmacaoComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [DialogoConfirmacaoComponent]
})
export class DialogoConfirmacaoModule { }
