type at = (str: string, position: number) => string | undefined;

type NumberOrString = number | string;

let val: NumberOrString = 10; // OK
val = 'My string'; // OK