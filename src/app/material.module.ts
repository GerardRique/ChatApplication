import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatGridListModule, MatCardModule, MatListModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatGridListModule, MatCardModule, MatListModule, MatInputModule],
  exports: [MatButtonModule, MatGridListModule, MatCardModule, MatListModule, MatInputModule],
})
export class MaterialModule { }