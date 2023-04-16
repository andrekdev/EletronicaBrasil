import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './page/sobre/sobre.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ConteudoComponent } from './navegacao/conteudo/conteudo.component';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { ProdutosComponent } from './page/produtos/produtos.component';

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
    AppRoutingModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]

  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/u'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
