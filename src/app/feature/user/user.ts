export class User {
  constructor(
    public userId: number,
    public username: string,
    public email: string,
    public password: string,
    public created: Date,
    public updated: Date,
    public enabled: boolean,
    public archived: boolean,
    public personId: number,
    public rolId: number
  ) {}
}
