import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry/entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryRoutingModule } from './entry-routing.module';
@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, EntryRoutingModule],
})
export class EntryModule {}
