import { Routes } from "@angular/router";
import { ConteudoComponent } from "./navegacao/conteudo/conteudo.component";
import { SobreComponent } from "./page/sobre/sobre.component";
import { ProdutosComponent } from "./page/produtos/produtos.component";

export const rootRouterConfig: Routes = [  
      { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {  path: 'inicio', component: ConteudoComponent},
    { path: 'sobre', component: SobreComponent},
    { path: 'produtos', component: ProdutosComponent},
]