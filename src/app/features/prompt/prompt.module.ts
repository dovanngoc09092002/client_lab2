import { NgModule } from '@angular/core';
import { PromptEditorComponent } from './components/prompt-editor/prompt-editor.component';
import { PromptListComponent } from './components/promt-list/prompt-list.component';
import { PromptRouting } from './prompt-routing.module';

@NgModule({
  declarations: [PromptEditorComponent, PromptListComponent],
  imports: [PromptRouting],
})
export class PromptModule {}
