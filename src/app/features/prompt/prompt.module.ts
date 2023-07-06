import { NgModule, OnInit } from '@angular/core';
import { PromptEditorComponent } from './components/prompt-editor/prompt-editor.component';
import { PromptListComponent } from './components/promt-list/prompt-list.component';
import { PromptRouting } from './prompt-routing.module';
import { Router } from '@angular/router';
declare const FB: any;
@NgModule({
  declarations: [PromptEditorComponent, PromptListComponent],
  imports: [PromptRouting],
})
export class PromptModule implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
