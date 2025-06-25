// 타입스크립트 원시 타입
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let x: [string, number] = ["hello", 10];

// Any
// 모든 타입을 허용, 타입스크립트의 장점을 포기하는 것과 같음.
let noSure: any = 4;

// Unknown
// 모든 타입을 허용하지만, 사용하기 전에 타입 검사가 필요함.
let value: unknown = 'hello';

// void
// 반환 값이 없음.
// 정상적으로 실행되고 리턴 값이 없는 함수에 사용.
function warnUser(): void {
  console.log("This is my warning message");
}

// never
// 어떤 값도 가질 수 없는 타입.
// 함수가 정상적으로 끝나지 않거나, 도달할 수 없는 코드를 나타날 떄 사용.
// example: 함수가 예외를 던지거나 무한 루프에 빠지는 경우.
function error(message: string): never {
  throw new Error(message);
}

// Union 
// 여러 타입 중 하나를 나타내는 타입.
// A | B 형태로 정의. A 타입 또는 B 타입 둘 다 허용.
let id: number | string = 123;
id = "ABC123";

// Intersection
// Union 과 정반대 개념.
type Person = {
  name: string;
} & {
  age: number;
};

// Type Aliases
type Point = {
  x: number;
  y: number;
};

type ID = number | string;


// Interface
interface User {
  name: string;
  age: number;
  email?: string; // 선택적 속성
}

// Union 타입, Type Aliases, Interface 이 3가지 방법의 차이를 잘 모르겠다.

// 위 3가지 타입에 대해 간단히 정리하자면:
// 1. Union 타입: 여러 타입 중 하나를 선택할 수 있는 타입.
// 2. Type Aliases: 새로운 타입 이름을 정의하는 방법. 객체, 함수, 배열 등 다양한 타입을 정의할 수 있음.
// 3. Interface: 객체의 구조를 정의하는 방법. 클래스와 함께 사용되며, 상속과 구현이 가능함.