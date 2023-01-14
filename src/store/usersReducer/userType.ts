interface IDate {
  date: string;
  age: number;
}
interface ILogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}
interface IName {
  name: string;
}
interface IId extends IName {
  value: string;
}

interface IStreet extends IName {
  number: number;
}

interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}
interface ICoordinates {
  latitude: string;
  longitude: string;
}

interface ITimezone {
  offset: string;
  description: string;
}

interface ILocation {
  street: IStreet;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: ICoordinates;
  timezone: ITimezone;
}
interface IFullName {
  title: string;
  first: string;
  last: string;
}

interface UserDate {
  gender: string;
  name: IFullName;
  location: ILocation;
  email: string;
  login: ILogin;
  dob: IDate;
  registered: IDate;
  phone: string;
  cell: string;
  id: IId;
  picture: IPicture;
  nat: string;
}
export type { UserDate };
