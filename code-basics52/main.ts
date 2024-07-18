interface Person {
  name: string;
  age: number;
  location?: {
    country: string;
    city: string;
  };
}

interface PersonDetails {
  location: Person['location'];
}