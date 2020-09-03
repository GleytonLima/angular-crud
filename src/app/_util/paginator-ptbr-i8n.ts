import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from "@angular/core";

@Injectable()
export class MatPaginatorIntlPtBr extends MatPaginatorIntl {
  
    /** A label for the page size selector. */
    itemsPerPageLabel: string = 'Itens por página:';
  
    /** A label for the button that increments the current page. */
    nextPageLabel: string = 'Avançar';
  
    /** A label for the button that decrements the current page. */
    previousPageLabel: string = 'Voltar';
  
    /** A label for the button that moves to the first page. */
    firstPageLabel: string = 'Primeira página';
  
    /** A label for the button that moves to the last page. */
    lastPageLabel: string = 'Última página';
  
    /** A label for the range of items within the current page and the length of the whole list. */
    getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length == 0 || pageSize == 0) { return `0 de ${length}`; }
  
      length = Math.max(length, 0);
  
      const startIndex = page * pageSize;
  
      // If the start index exceeds the list length, do not try and fix the end index to the end.
      const endIndex = startIndex < length ?
          Math.min(startIndex + pageSize, length) :
          startIndex + pageSize;
  
      return `${startIndex + 1} – ${endIndex} de ${length}`;
    }
  }