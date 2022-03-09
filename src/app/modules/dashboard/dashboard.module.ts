import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent,
    CardsComponent
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
