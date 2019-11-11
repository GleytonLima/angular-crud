import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../item.service';
import { Item } from '../../item.model';
import { Page, PageRequest } from 'src/app/_util/Pagination';
import { PageEvent } from '@angular/material/paginator';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-item-listar',
    templateUrl: './item-listar.component.html',
    styleUrls: ['./item-listar.component.scss']
})
export class ItemListarComponent implements OnInit {

    colunasTabela = ['id', 'nome'];

    page: Page<Item> = new Page([], 0);
    pageEvent: PageEvent;

    carregando = false;

    constructor(private itemService: ItemService) { }

    ngOnInit() {
        this.listarItens();
    }

    listarItens(){
        this.carregando = true;
        let queryAdicional;
        this.itemService.listar(
            new PageRequest(
                {
                    pageNumber: this.pageEvent? this.pageEvent.pageIndex: 0,
                    pageSize: this.pageEvent? this.pageEvent.pageSize: 5
                },
                queryAdicional
            )
        ).pipe(
            take(1)
        )
        .subscribe(
            page => {
                this.page = page;
                this.carregando = false;
            },
            error => {
                this.page = new Page([], 0);
                this.carregando = false;
            }
        );
    }

}
