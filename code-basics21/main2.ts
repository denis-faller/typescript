type User = {
  name: string
};

const users1: ({ name: string })[] = [];
const users2: (string | null)[] = [];
const users3: (User | null | { name: string })[] = [];