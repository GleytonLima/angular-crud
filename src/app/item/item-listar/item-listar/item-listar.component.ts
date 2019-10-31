import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../item.service';
import { Observable } from 'rxjs';
import { Item } from '../../item.model';

@Component({
    selector: 'app-item-listar',
    templateUrl: './item-listar.component.html',
    styleUrls: ['./item-listar.component.scss']
})
export class ItemListarComponent implements OnInit {

    itens$: Observable<Item[]>;

    colunasTabela = ['id', 'nome'];

    constructor(private itemService: ItemService) { }

    ngOnInit() {
        this.listarItens();
    }

    listarItens(){
        this.itens$ = this.itemService.listar();
    }

}
