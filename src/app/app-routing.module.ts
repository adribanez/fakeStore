import { ProductsListComponent } from './components/products-list/products-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

const routes: Routes = [
  {
    path: "products", component: ProductsListComponent
  },
  {
    path: "products/detail/:id", component: ProductsDetailsComponent
  },
  {
    path: "**", redirectTo: "products"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }