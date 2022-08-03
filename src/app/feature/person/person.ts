export class Person {
  constructor(
    public personId: number,
    public dni: string,
    public name: string,
    public email: string,
    public username: string,
    public password: string,
    public created: Date,
    public updated: Date,
    public enabled: boolean,
    public archived: boolean,
    public rolId: number
  ) {}
}
