import { CityModel } from './city.model';
export class ClientModel {

  public id: number
  public firstName: string
  public secondName: string
  public lastName: string
  public secondLastName: string
  public phone: string
  public address: string
  public documentNumber: string
  public documenType: string
  public city: CityModel;


  constructor( dataModel: any = {} ) {
    this.id = dataModel.id;
    this.firstName = dataModel.firstName;
    this.secondName = dataModel.secondName;
    this.lastName = dataModel.lastName;
    this.secondLastName = dataModel.secondLastName;
    this.phone = dataModel.phone;
    this.address = dataModel.address;
    this.documentNumber = dataModel.documentNumber;
    this.documenType = dataModel.documenType;
    this.city = new CityModel( { ...dataModel.city} );
  }
}
