import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeShellRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeShellRoutes)],
})
export class HomeShellModule {}
