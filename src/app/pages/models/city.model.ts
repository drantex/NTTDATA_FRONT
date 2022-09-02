export class CityModel {
  public id: string;
  public name: string;

  constructor(dataCity: any = {} ) {
    this.id = dataCity.id;
    this.name = dataCity.name;
  }

}
