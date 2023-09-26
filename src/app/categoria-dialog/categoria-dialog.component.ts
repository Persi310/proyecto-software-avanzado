import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-categoria-dialog',
  templateUrl: './categoria-dialog.component.html',
  styleUrls: ['./categoria-dialog.component.css']
})
export class CategoriaDialogComponent {
  categoria: any = {};

  constructor(
    public dialogRef: MatDialogRef<CategoriaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.categoria = { ...data.categoria }; // Copia la categoría para evitar cambios en el objeto original
  }

  cerrarDialog(): void {
    this.dialogRef.close();
  }

  guardarCambios(): void {
    // Aquí puedes implementar la lógica para guardar los cambios en la categoría
    // this.categoria contiene la categoría editada
    
    // Cierra el diálogo y pasa un valor, por ejemplo, true si se guardaron los cambios.
    this.dialogRef.close({ categoria: this.categoria, isEditing: true });
  }
}
