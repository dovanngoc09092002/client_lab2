import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BusinessComponent } from "./business.component";
const routes: Routes = [
  {
    path: "business",
    component: BusinessComponent,
    children: [
      {
        path: "prompt",
        loadChildren: () =>
          import("../../features/prompt/prompt.module").then((m) => m.PromptModule),
      },
      { path: "", redirectTo: "inbox", pathMatch: "full" },
      { path: "**", redirectTo: "inbox" },
    ],
  },
  { path: "", redirectTo: "business", pathMatch: "full" },
  { path: "**", redirectTo: "business" },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class BusinessModule {}
