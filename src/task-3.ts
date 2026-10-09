const usernames: string[] = ["Anna", "Max", "Olena"];

const ratings: number[] = [5, 4, 3];

interface Product {
  id: number;
  title: string;
}

const products: Product[] = [
  { id: 1, title: "Laptop" },
  { id: 2, title: "Phone" },
];

console.log(usernames, ratings, products);
