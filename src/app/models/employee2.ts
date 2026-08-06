export class Employee2 {
  id: number | undefined;
  firstName!: string;
  lastName!: string;
  sal!: number;
  gender!: string;
  email!: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getYearlySalary(): number {
    return 12 * this.sal;
  }
}
