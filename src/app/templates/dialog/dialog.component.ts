import { Component, Inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public entryData: any,
    private router: Router
  ) {}
  signup() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { use: "signup" },
    });
    this.dialogRef.close();
  }
  login(): void {
    this.router.navigate(["/createUser/Personal"]);
    this.dialogRef.close();
  }
}
