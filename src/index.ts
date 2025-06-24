import { formatDate } from "./utils/helpers";
import { type User, greetUser } from "./utils/user";

console.log("Modern TS Setup Complelted!");

const user: User = {
  name: "이경환",
  age: 26,
  isActive: true,
  createdAt: new Date(),
};

console.log(greetUser(user));
console.log(`가입일: ${formatDate(user.createdAt)}`);

// Top-Level await 사용
const response = await fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json()).catch(() => null);

if (response) {
  console.log(`api 응답 : `, response);
}
