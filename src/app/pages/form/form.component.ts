import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { ActivatedRoute, Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { AngularFireStorage } from "@angular/fire/storage";
import { ReservationService } from "src/app/serveces/reservation.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent {
  spinner: any = false;
  formModel: any = {};
  packId: any;
  packNumber: any;
  constructor(
    private route: ActivatedRoute,
    private storage: AngularFireStorage,
    private reservationservice: ReservationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.spinner = true;
    this.route.queryParams.subscribe((queryParams: any) => {
      console.log(queryParams.id);
      this.spinner = false;
      this.packId = queryParams.id;
      if (queryParams.id === "61d81ab86f7bb76d53e22759") {
        this.packNumber = "0";
      } else if (queryParams.id === "61d81ae26f7bb76d53e2275f") {
        this.packNumber = "1";
      } else if (queryParams.id === "61d81b106f7bb76d53e22765") {
        this.packNumber = "2";
      }
    });
  }
  onSubmit() {
    console.log(this.formModel);

    Swal.fire({
      title: "Select resume",
      input: "file",
      inputAttributes: {
        accept: ".pdf",
        "aria-label": "Upload your Resume",
      },
    }).then((file) => {
      if (file.value) {
        this.uploadAndSubmit(file, this.formModel);
        this.spinner = true;
      } else {
        this.spinner = false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error Uploading File",
        });
      }
    });
    // this.formService.createReservation(this.formModel).subscribe((responce)=> {
    //   console.log(responce)
    // })
  }
  order(packId: string) {
    Swal.fire({
      title: "Select resume",
      input: "file",
      inputAttributes: {
        accept: ".pdf",
        "aria-label": "Upload your Resume",
      },
    }).then((file) => {
      if (file.value) {
        // this.uploadAndSubmit(file, packId)
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error Uploading File",
        });
      }
    });
  }
  uploadAndSubmit(file: any, data: any) {
    const pathfile = "resumes/" + "userEmail" + "/" + new Date().getTime();
    const fileref = this.storage.ref(pathfile);
    this.storage
      .upload(pathfile, file.value)
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileref.getDownloadURL().subscribe((url: any) => {
            var obj = {
              packId: this.packId,
              status: "0",
              resume: url,
              field: data.field,
              formUser: {
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                email: data.email,
                mobilePhone: data.mobilePhone,
                education: data.education,
                fieldOfWork: data.fieldOfWork,
                details: data.details,
              },
            };
            this.reservationservice
              .createReservation(obj)
              .subscribe((res: any) => {
                console.log(res);
                if (res.message) {
                  this.spinner = false;
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Unvalid Email",
                  });
                } else {
                  this.spinner = false;
                  this.router.navigate(["/payment"], {
                    queryParams: { id: res._id },
                  });
                }
              });
          });
        })
      )
      .subscribe();
  }
}
