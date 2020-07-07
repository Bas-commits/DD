
export class MijnGegevensComponent{

  constructor(
    public id: number,
    public email: string,
    public password: string,
    public checkout: boolean,
    public locatie?: string
  ) { }

}
