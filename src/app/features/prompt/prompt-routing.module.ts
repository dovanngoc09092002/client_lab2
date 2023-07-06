import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PromptListComponent } from "./components/promt-list/prompt-list.component";
const routes: Routes = [
  {
    path: "",
    component: PromptListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule],
})
export class PromptRouting { }
