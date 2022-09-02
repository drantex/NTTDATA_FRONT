import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SearchClientService } from './service/search-client.service';
import { ClientModel } from '../models/client.model';


type DocumentType = {
  name: string;
  code: 'C' | 'P'
};

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.scss'],
  providers: [MessageService]
})
export class SearchClientComponent {

  public documentTypes: DocumentType[] = [
    { name: "Cédula", code: 'C' },
    { name: "Pasaporte", code: 'P' }
  ];

  public form: UntypedFormGroup = new UntypedFormGroup({
    documentType: new UntypedFormControl({ value: null, disabled: false }, [Validators.required]),
    documentNumber: new UntypedFormControl({ value: null, disabled: false }, [Validators.required, Validators.max(99999999999), Validators.min(10000000)])
  });

  constructor (private serviceClient: SearchClientService, private router: Router, private messageService: MessageService ) { }

  ngOnInit(): void {
    console.log(this.form);
  }

  public searchClient(): void {

    if ( this.form.valid ) {
      const { documentType, documentNumber } = this.form.value;
      this.serviceClient.getClientByDocumentTypeAndDocumentNumber( documentType, documentNumber )
      .subscribe( ({ error, object}) => {
        if ( error ) {
          this.messageService.add({severity:'error', summary: 'Error', detail: 'El cliente no existe'});
          return;
        }
        const client = new ClientModel( { ...object } );
        console.log( client )
        this.serviceClient.setClient( client );
        this.router.navigate(['/view-client']);

      });
    }
  }

}
