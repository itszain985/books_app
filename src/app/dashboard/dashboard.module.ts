import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DashboardPageRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DashboardPage],
})
export class DashboardPageModule {}
