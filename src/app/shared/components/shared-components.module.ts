import { PageFooterComponent } from './page-footer/page-footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDataNotFoundComponent } from './page-data-not-found/page-data-not-found.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';

@NgModule({
  declarations: [
    PageFooterComponent,
    PageDataNotFoundComponent,
    PageLoaderComponent,
  ],
  imports: [CommonModule],
  exports: [
    PageFooterComponent,
    PageDataNotFoundComponent,
    PageLoaderComponent,
  ],
})
export class SharedComponentsModule {}
