import { RouterModule } from '@angular/router';
import { LaserCannonComponent } from './../laser-cannon/laser-cannon.component';
import { TurretComponent } from './../turret/turret.component';
import { DeathSquareComponent } from './../death-square/death-square.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent
  ],
  exports: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent
  ]
})
export class InternalDefensesModule { }
