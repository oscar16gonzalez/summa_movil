import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { ModalInfoPageRoutingModule } from './modal-info-routing.module';

import { ModalInfoPage } from './modal-info.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageModule {}
