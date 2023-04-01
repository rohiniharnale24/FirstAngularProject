import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { blogComponent } from './blog/blog.component';
import { productComponent } from './product/product.component';
import { productsComponents } from './products/products.component';
import { tableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    productComponent,
    productsComponents,
    blogComponent,
    tableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
