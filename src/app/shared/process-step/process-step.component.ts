import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-process-step',
  templateUrl: './process-step.component.html',
  styleUrls: ['./process-step.component.scss'],
})
export class ProcessStepComponent {
  @Input() number!: string;
  @Input() paragraph!: string;
  @Input() title!: string;
  @Input() color!: string;
}
