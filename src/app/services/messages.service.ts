import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  showMessageError(content: string, action: string) {
    this.snackBar.open(content, action, {
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: "center",
      panelClass: ['blue-snackbar']
    });
  }

}
