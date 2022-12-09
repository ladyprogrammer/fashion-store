import { Component } from '@angular/core';

@Component({
  selector: 'block-address',
  templateUrl: './address.component.html',
  styleUrls: ['../footer.component.scss', './address.component.scss']
})
export class AddressComponent {
  title = 'About MeStore';
  description = 'This is a demo of a site created in Angular 14. TDD was practiced for as much as possible.';
  location = '0123 Main Road, Your City, NY 123456';
  phone = '(000) 2345-6789';
  email = 'info@samplesite';
}
