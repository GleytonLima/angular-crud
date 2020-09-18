import { Component, OnInit } from "@angular/core";
import { ItemService } from "../../item.service";
import { Item } from "../../item.model";
import { Page, PageRequest } from "src/app/_util/Pagination";
import { PageEvent } from "@angular/material/paginator";
import { take } from "rxjs/operators";
import { Sort } from "@angular/material/sort";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
    selector: "app-item-listar",
    templateUrl: "./item-listar.component.html",
    styleUrls: ["./item-listar.component.scss"],
})
export class ItemListarComponent implements OnInit {
    colunasTabela = ["id", "nome"];

    page: Page<Item> = new Page([], 0);
    pageEvent: PageEvent;
    sortEvent: Sort;

    carregando = false;

    formGroupPesquisa: FormGroup;

    constructor(private itemService: ItemService, private matSnackBar: MatSnackBar, private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.formGroupPesquisa = this.formBuilder.group({
            nome: [null],
        });
        this.listarItens();
    }

    limparPesquisa() {
        this.formGroupPesquisa.reset();
        this.listarItens();
    }

    listarItens() {
        this.carregando = true;
        const queryAdicional = new Map();
        if (this.formGroupPesquisa.value.nome) {
            queryAdicional.set("nome_like", this.formGroupPesquisa.value.nome);
        }
        this.itemService
            .listar(
                new PageRequest(
                    {
                        pageNumber: this.pageEvent ? this.pageEvent.pageIndex : 0,
                        pageSize: this.pageEvent ? this.pageEvent.pageSize : 5,
                    },
                    {
                        property: this.sortEvent ? this.sortEvent.active : "id",
                        direction: this.sortEvent ? this.sortEvent.direction : "asc",
                    },
                    queryAdicional
                )
            )
            .pipe(take(1))
            .subscribe(
                (page) => {
                    this.page = page;
                    this.carregando = false;
                },
                (error) => {
                    this.page = new Page([], 0);
                    this.carregando = false;
                    this.matSnackBar.open("Erro ao listar itens", null, {
                        duration: 5000,
                        panelClass: "red-snackbar",
                    });
                }
            );
    }
}
