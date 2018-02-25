import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'log-in-dialog',
    templateUrl: '/LoginDialg.html',
})

export class LogInDialog{
    constructor(
        public dialogRef: MatDialogRef<LogInDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
    
      onNoClick(): void {
        this.dialogRef.close();
      }
}