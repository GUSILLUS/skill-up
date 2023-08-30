export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address?: Address,
  website: string,
  company?: Company
};

type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
}

type Company = {
  name: string,
  catchPhrase: string,
  bs: string
}