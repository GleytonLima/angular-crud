import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { ItemService } from "../../item.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Item } from "../../item.model";
import { DialogoConfirmacaoComponent } from "src/app/_shared/dialogo-confirmacao/dialogo-confirmacao.component";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: "app-item-cadastrar-editar",
    templateUrl: "./item-cadastrar-editar.component.html",
})
export class ItemCadastrarEditarComponent implements OnInit {
    formGroup: UntypedFormGroup;
    item: Item;

    constructor(
        private formBuilder: UntypedFormBuilder,
        private itemService: ItemService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public matDialog: MatDialog,
        public matSnackBar: MatSnackBar
    ) {}

    ngOnInit() {
        this.item = this.activatedRoute.snapshot.data["item"];
        this.formGroup = this.formBuilder.group({
            id: [this.item && this.item.id ? this.item.id : null],
            nome: [this.item && this.item.nome ? this.item.nome : "", Validators.required],
        });
    }

    salvar() {
        if (this.item && this.item.id) {
            this.itemService.atualizar(this.formGroup.value).subscribe({
                next: (itemAtualizado) => {
                    this.matSnackBar.open("Atualizado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/itens");
                },
                error: (error) => {
                    this.matSnackBar.open("Erro ao atualizar", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                },
            });
        } else {
            this.itemService.cadastrar(this.formGroup.value).subscribe({
                next: (itemCadastrado) => {
                    this.matSnackBar.open("Cadastrado com sucesso!", null, {
                        duration: 5000,
                        panelClass: "green-snackbar",
                    });
                    this.router.navigateByUrl("/itens");
                },
                error: (error) => {
                    this.matSnackBar.open("Erro ao cadastrar", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                },
            });
        }
    }

    deletar() {
        const dialogoReferencia = this.matDialog.open(DialogoConfirmacaoComponent);

        dialogoReferencia.afterClosed().subscribe((valorResposta) => {
            if (valorResposta) {
                this.itemService.deletar(this.item).subscribe({
                    next: (response) => {
                        this.matSnackBar.open("Item deletado com sucesso!", null, {
                            duration: 5000,
                            panelClass: "green-snackbar",
                        });
                        this.router.navigateByUrl("/itens");
                    },
                    error: (error) => {
                        this.matSnackBar.open("Erro ao deletar", null, {
                            duration: 5000,
                            panelClass: "red-snackbar",
                        });
                    },
                });
            }
        });
    }
}
