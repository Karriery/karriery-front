import { Component, Inject } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth.service";
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
    private router: Router,
    private auth : AuthService
  ) {}
  gotosignup() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { use: "signup" },
    });
    this.dialogRef.close();
  }
  gotologin(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { use: "login" },
    });
    this.dialogRef.close();
  }


  login(email : any , password : any){
     this.auth.login(email , password).subscribe((data : any)=>{
      console.log(data)
         if(data.token) {
           localStorage.setItem("token" , data.token)
          this.router.navigateByUrl("/userProfil/userDashbord")
          this.dialogRef.close();
         } else {

         }
     })
  }

  signup(email : any , password : any){
    this.auth.register(email , password).subscribe((data : any)=>{
      console.log(data)
        if(data.token) {
          localStorage.setItem("token" , data.token)
          this.router.navigateByUrl("/createUser/Personal")
          this.dialogRef.close();
        } else {
         
        }
    })
 }
}
