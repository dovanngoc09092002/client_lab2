import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    children: [
      {
        path: 'prompt',
        loadChildren: () =>
          import('../../features/prompt/prompt.module').then(
            (m) => m.PromptModule
          ),
      },

    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class BusinessModule {}
