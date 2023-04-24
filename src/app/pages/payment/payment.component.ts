import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ReservationService } from 'src/app/serveces/reservation.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  reservation: any;
  notfound404: boolean = false;
  spinner: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private requestService: ReservationService,
    private router: Router
  ) {}
  loc: any = [{ number: [] }];
  listofNumber: any = [];
  msg: any = '';
  ngOnInit(): void {
    this.spinner = true;
    this.route.queryParams.subscribe((queryParams: any) => {
      this.requestService
        .getReservationById(queryParams.id)
        .subscribe((data : any) => {
          this.reservation = data[0];
          if (this.reservation.payment) {
            this.router.navigate(['/checkfeedback'], {
              queryParams: { id: queryParams.id },
            });
          }
          console.log(data);
          if (this.reservation.status == '0') {
            this.notfound404 = false;
            this.spinner = false;
          } else {
            this.notfound404 = true;
            this.spinner = false;
          }
        });
    });
    this.requestService.location().subscribe((data: any) => {
      for (var i = 0; i < data.length; i++) {
        var halim =
          data[i].person +
          ' is available in ' +
          data[i].location +
          ' and you can contact him on ';

        var m = '';
        for (var j = 0; j < data[i].number.length; j++) {
          halim = halim + ' / ' + data[i].number[j];
          m += data[i].number[j];
        }
        this.msg += '\n' + halim;
      }
    });
  }
  payOnline() {
    this.requestService
      .konnect(this.reservation._id, this.reservation)
      .subscribe((data: any) => {
        window.open(data.payUrl, '_blank');
      });
  }
  seeLoc() {
    Swal.fire('Our Agents', this.msg, 'question');
  }
  uploadPhoto() {
    Swal.fire({
      title: 'Upload your payment receipt to this postal account :',
      text: '17001000000021806952',
      input: 'file',
      inputAttributes: {
        'aria-label': 'Upload your payment receipt',
      },
    }).then((file) => {
      if (file.isConfirmed && file.value) {
        this.spinner = true;
        var formData = new FormData();
        formData.append('img', file.value);
        this.requestService.uploadImg(formData).subscribe((resp: any) => {
          let imageUrl = resp['msg'].url;
          this.requestService
            .updatePaimet(this.reservation._id, { payment: imageUrl })
            .subscribe(() => {
              this.requestService
                .updateStatus(this.reservation._id, { status: '1' })
                .subscribe(() => {
                  this.spinner = false;
                  Swal.fire({
                    icon: 'success',
                    title: 'confirmed',
                    text: 'We will be verifying your paiment',
                  });
                });
            });
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error Uploading Image',
        });
      }
    });
  }
  getErrors(): string {
    switch (this.reservation.status) {
      case '1':
        return 'your paiment verification is being procceed';
        break;
      case '2':
        return 'you have successfully payed this package';
        break;
      case '3':
        return 'you have successfully payed this package';
        break;
      case '4':
        return 'this package has been verified and feedback is ready';
        break;
      default:
        return 'error';
    }
  }
}
