import { Component, OnInit } from '@angular/core';

import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',

})
export class ProdutosComponent {
  symbol: string|boolean;

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[];

  ngOnInit() {
    this.produtoService.obterProdutos()
       .subscribe(
        produtos  =>      {
          this.produtos = produtos
          console.log(produtos)
        },
        //em caso de erro
        error =>    console.log(error)
       )
  }
}
