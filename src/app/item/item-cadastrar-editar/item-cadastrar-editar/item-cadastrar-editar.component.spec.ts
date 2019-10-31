import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCadastrarEditarComponent } from './item-cadastrar-editar.component';

describe('ItemCadastrarEditarComponent', () => {
  let component: ItemCadastrarEditarComponent;
  let fixture: ComponentFixture<ItemCadastrarEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCadastrarEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
