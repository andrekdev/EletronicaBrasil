import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule aqui

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ConteudoComponent } from './navegacao/conteudo/conteudo.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { ProdutosComponent } from './page/produtos/lista-produtos/produtos.component';
import { ProdutoService } from './page/produtos/produtos.service';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    MenuComponent,
    FooterComponent,
    ConteudoComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
        HttpClientModule,
    AppRoutingModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]

  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/u'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
