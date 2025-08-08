import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Certificate } from 'src/app/models/certificate-model';

@Component({
    selector: 'app-certificate',
    templateUrl: './certificate.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class CertificateComponent {
  @Input() certificate: Certificate;

}
