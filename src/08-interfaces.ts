type Address = {
  street_1: string,
  street_2?: string,
  city: string,
  state: string,
  ZIP: string
}

interface Company {
  name: string,
  address: Address
}

interface Manager {
  readonly id: number,
  fullname: string,
  company: Company
}

// Interfaces can be reopened and modified with additional properties
interface Manager {
  age?: number
}

const m1: Manager = {
  id: 12345,
  fullname: 'Steve Smith',
  company: {
    name: 'Tech Global',
    address: {
      street_1: '123 Abc St',
      street_2: 'Suite 200',
      city: 'Chicago',
      state: 'IL',
      ZIP: '12345-1234'
    }
  }
}


// Interfaces can be reopened and modified