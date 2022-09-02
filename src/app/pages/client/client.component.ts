import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { SearchClientService } from '../search-client/service/search-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl({ value: null, disabled: true }),
    firstName: new UntypedFormControl({ value: null, disabled: true }),
    secondName: new UntypedFormControl({ value: null, disabled: true }),
    lastName: new UntypedFormControl({ value: null, disabled: true }),
    secondLastName: new UntypedFormControl({ value: null, disabled: true }),
    phone: new UntypedFormControl({ value: null, disabled: true }),
    address: new UntypedFormControl({ value: null, disabled: true }),
    documenType: new UntypedFormControl({ value: null, disabled: true }),
    documentNumber: new UntypedFormControl({ value: null, disabled: true }),
    city: new UntypedFormGroup({
      id: new UntypedFormControl({ value: null, disabled: true }),
      name: new UntypedFormControl({ value: null, disabled: true }),
    })
  });

  constructor(private serviceClient: SearchClientService, private router: Router) { }

  ngOnInit(): void {
    const client = this.serviceClient.getClient();

    if ( !client ) {
      this.onBack();
    }

    this.form.reset( {...client, documenType: client?.documenType === 'C' ? 'Cédula': 'Pasaporte'} );
    console.log( { form: this.form.value });
  }

  /**
   * Metodo encargado de regresar en la navegación a la principal de búsqueda de clientes
   */
  onBack(): void {
    this.router.navigate(['/search-client']);
  }

}
