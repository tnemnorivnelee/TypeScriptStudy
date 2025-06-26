// 함수 타입 정의
function greet1(name: string): string {
  return `Hello, ${name}!`;
}

const add = (a: number, b: number): number => {
  return a + b;
};

// 선택적 매개변수와 기본 값
function buildName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}

function greet2(name: string = "World"): string {
  return `Hello, ${name}!`;
}

// Rest Parameters
function buildNameList(firstName: string, ...restOfName: string[]): string {
  return firstName + " " + restOfName.join("");
}

console.log(buildNameList("John", "Doe", "Smith"));

// Function Overloads
function pickCard(x: { suit: string; card: number; }[]): number;

function pickCard(x: number): { suit: string; card: number; };

function pickCard(x: any): any {
  // 구현..
}

// rest parameter(나머지 매개변수) 말고는 어렵지 않았다!
