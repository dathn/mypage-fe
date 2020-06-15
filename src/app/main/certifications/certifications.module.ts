import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificationsRoutingModule } from './certifications-routing.module';
import { CertificationsComponent } from './certifications.component';

@NgModule({
  imports: [
    CommonModule,
    CertificationsRoutingModule
  ],
  declarations: [CertificationsComponent]
})
export class CertificationsModule { }
