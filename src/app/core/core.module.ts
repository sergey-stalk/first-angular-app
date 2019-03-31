import { ApiDataService } from './services/api-data.service';
import { TransformDataService } from './services/transform-data.service';
import { HeaderComponent } from './header/header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ApiDataService,
    TransformDataService,
  ],
  exports: [
    HeaderComponent,
  ],
})

export class CoreModule {}
