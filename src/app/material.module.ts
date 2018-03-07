import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatGridListModule, MatCardModule, MatListModule, MatInputModule, MatIconModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatGridListModule, MatCardModule, MatListModule, MatInputModule, MatIconModule],
  exports: [MatButtonModule, MatGridListModule, MatCardModule, MatListModule, MatInputModule, MatIconModule],
})
export class MaterialModule { }