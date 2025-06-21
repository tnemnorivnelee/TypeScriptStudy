# TypeScript 필수 문법 학습 가이드

> TypeScript 공식 문서를 기반으로 작성된 현업에서 필수적으로 알아야 할 TypeScript 문법 학습 로드맵

## 📚 학습 순서 및 목차

### 1. 기초 설정 및 환경 구성
- [ ] **TypeScript 설치 및 환경 설정**
  - Node.js 및 npm/yarn 설치
  - TypeScript 컴파일러 설치 (`npm install -g typescript`)
  - VS Code 및 TypeScript 확장 프로그램 설정

- [ ] **tsconfig.json 설정**
  - 기본 컴파일러 옵션 이해
  - strict 모드 설정
  - 주요 옵션들 (`target`, `module`, `outDir`, `rootDir`, `strict` 등)

### 2. TypeScript 기본 문법 (필수 ⭐⭐⭐)

#### 2.1 기본 타입 (Basic Types)
- [ ] **원시 타입**
  ```typescript
  // 기본 타입들
  let isDone: boolean = false;
  let decimal: number = 6;
  let color: string = "blue";
  let list: number[] = [1, 2, 3];
  let x: [string, number] = ["hello", 10]; // 튜플
  ```

- [ ] **Any, Unknown, Void, Never**
  ```typescript
  let notSure: any = 4;
  let value: unknown = 'hello';
  function warnUser(): void { console.log("warning"); }
  function error(message: string): never { throw new Error(message); }
  ```

#### 2.2 Union과 Intersection Types
- [ ] **Union Types (|)**
  ```typescript
  let id: number | string = 123;
  id = "ABC123";
  ```

- [ ] **Intersection Types (&)**
  ```typescript
  type Person = { name: string } & { age: number };
  ```

#### 2.3 Type Aliases vs Interfaces
- [ ] **Type Aliases**
  ```typescript
  type Point = { x: number; y: number };
  type ID = number | string;
  ```

- [ ] **Interfaces**
  ```typescript
  interface User {
    name: string;
    age: number;
    email?: string; // 선택적 속성
  }
  ```

### 3. 함수와 메서드 타이핑 (필수 ⭐⭐⭐)

- [ ] **함수 타입 정의**
  ```typescript
  function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  const add = (a: number, b: number): number => a + b;
  ```

- [ ] **선택적 매개변수와 기본값**
  ```typescript
  function buildName(firstName: string, lastName?: string): string {
    // 구현
  }
  
  function greet(name: string = "World"): string {
    return `Hello, ${name}!`;
  }
  ```

- [ ] **Rest Parameters**
  ```typescript
  function buildNameList(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
  }
  ```

- [ ] **Function Overloads**
  ```typescript
  function pickCard(x: {suit: string; card: number; }[]): number;
  function pickCard(x: number): {suit: string; card: number; };
  function pickCard(x: any): any {
    // 구현
  }
  ```

### 4. 객체 타입과 구조적 타이핑 (필수 ⭐⭐⭐)

- [ ] **객체 타입 정의**
  ```typescript
  interface ApiResponse {
    data: any;
    status: number;
    message: string;
  }
  ```

- [ ] **인덱스 시그니처**
  ```typescript
  interface StringDictionary {
    [key: string]: string;
  }
  ```

- [ ] **읽기 전용 속성**
  ```typescript
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  ```

### 5. 제네릭 (Generics) - 현업 필수 ⭐⭐⭐

- [ ] **기본 제네릭**
  ```typescript
  function identity<T>(arg: T): T {
    return arg;
  }
  
  interface GenericIdentityFn<T> {
    (arg: T): T;
  }
  ```

- [ ] **제네릭 제약 조건**
  ```typescript
  interface Lengthwise {
    length: number;
  }
  
  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
  }
  ```

- [ ] **조건부 타입과 제네릭**
  ```typescript
  type ApiResponse<T> = {
    data: T;
    error?: string;
    loading: boolean;
  };
  ```

### 6. 고급 타입 조작 (현업에서 자주 사용) ⭐⭐⭐

#### 6.1 Utility Types (매우 중요!)
- [ ] **Partial<T>** - 모든 속성을 선택적으로
- [ ] **Required<T>** - 모든 속성을 필수로
- [ ] **Pick<T, K>** - 특정 속성만 선택
- [ ] **Omit<T, K>** - 특정 속성 제외
- [ ] **Record<K, T>** - 키-값 쌍 타입 생성
- [ ] **Exclude<T, U>** - T에서 U에 할당 가능한 타입 제외
- [ ] **Extract<T, U>** - T에서 U에 할당 가능한 타입만 추출

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserUpdate = Partial<User>; // 모든 속성이 선택적
type UserPublic = Omit<User, 'password'>; // password 제외
type UserContact = Pick<User, 'name' | 'email'>; // name, email만
```

#### 6.2 Mapped Types
- [ ] **기본 Mapped Types**
  ```typescript
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  
  type Optional<T> = {
    [P in keyof T]?: T[P];
  };
  ```

#### 6.3 Template Literal Types
- [ ] **문자열 템플릿 타입**
  ```typescript
  type EventName<T extends string> = `on${Capitalize<T>}`;
  type ButtonEvent = EventName<'click'>; // 'onClick'
  ```

### 7. 클래스와 상속 ⭐⭐

- [ ] **클래스 기본 문법**
  ```typescript
  class Animal {
    private name: string;
    protected species: string;
    public age: number;
    
    constructor(name: string, species: string, age: number) {
      this.name = name;
      this.species = species;
      this.age = age;
    }
    
    move(distance: number): void {
      console.log(`${this.name} moved ${distance}m.`);
    }
  }
  ```

- [ ] **상속과 추상 클래스**
  ```typescript
  abstract class Animal {
    abstract makeSound(): void;
    
    move(): void {
      console.log("roaming the earth...");
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
      console.log("Woof!");
    }
  }
  ```

- [ ] **접근 제한자** (`public`, `private`, `protected`)
- [ ] **static 멤버**
- [ ] **getter/setter**

### 8. 모듈과 네임스페이스 ⭐⭐

- [ ] **ES6 모듈 시스템**
  ```typescript
  // export
  export interface User { ... }
  export default class UserService { ... }
  
  // import
  import { User } from './types';
  import UserService from './UserService';
  ```

- [ ] **동적 import**
  ```typescript
  const moduleA = await import('./moduleA');
  ```

### 9. 타입 가드와 타입 좁히기 (Narrowing) ⭐⭐⭐

- [ ] **typeof 가드**
  ```typescript
  function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
  }
  ```

- [ ] **instanceof 가드**
- [ ] **in 연산자**
- [ ] **사용자 정의 타입 가드**
  ```typescript
  function isString(value: any): value is string {
    return typeof value === "string";
  }
  ```

### 10. 데코레이터 (실험적 기능) ⭐

- [ ] **클래스 데코레이터**
- [ ] **메서드 데코레이터**
- [ ] **속성 데코레이터**
- [ ] **매개변수 데코레이터**

### 11. 실무에서 자주 사용하는 패턴들 ⭐⭐⭐

#### 11.1 API 응답 타이핑
```typescript
interface ApiResponse<T> {
  data: T;
  message: string;
  status: 'success' | 'error';
  timestamp: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

type UserListResponse = ApiResponse<User[]>;
type UserDetailResponse = ApiResponse<User>;
```

#### 11.2 폼 데이터 타이핑
```typescript
interface LoginForm {
  email: string;
  password: string;
  rememberMe?: boolean;
}

type LoginFormErrors = Partial<Record<keyof LoginForm, string>>;
```

#### 11.3 상태 관리 패턴
```typescript
interface AppState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

type AppAction = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string };
```

#### 11.4 컴포넌트 Props 타이핑 (React 기준)
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
```

### 12. 타입 선언 파일 (.d.ts) ⭐⭐

- [ ] **기존 JavaScript 라이브러리를 위한 타입 선언**
- [ ] **전역 타입 선언**
- [ ] **모듈 보강 (Module Augmentation)**

### 13. 컴파일러 설정 최적화 ⭐⭐

- [ ] **strict 모드 옵션들**
  - `noImplicitAny`
  - `strictNullChecks`
  - `strictFunctionTypes`
  - `noImplicitReturns`

- [ ] **성능 최적화 설정**
  - `incremental`
  - `tsBuildInfoFile`
  - `composite`

### 14. 실무 도구들 ⭐⭐

- [ ] **ESLint + TypeScript**
- [ ] **Prettier 설정**
- [ ] **Jest + TypeScript 테스팅**
- [ ] **Webpack/Vite + TypeScript**

## 🎯 학습 우선순위

### 1단계 (반드시 먼저 학습) ⭐⭐⭐
1. 기본 타입과 타입 어노테이션
2. 인터페이스와 타입 별칭
3. 함수 타이핑
4. 제네릭 기초
5. 유틸리티 타입 (Partial, Pick, Omit, Record)

### 2단계 (중급) ⭐⭐
1. 고급 제네릭과 조건부 타입
2. 타입 가드와 타입 좁히기
3. 클래스와 상속
4. 모듈 시스템

### 3단계 (고급) ⭐
1. Mapped Types와 Template Literal Types
2. 데코레이터
3. 타입 선언 파일 작성
4. 복잡한 타입 조작

## 📝 실습 프로젝트 추천

1. **Todo 애플리케이션** - 기본 타입과 인터페이스 연습
2. **API 클라이언트** - 제네릭과 유틸리티 타입 연습
3. **간단한 쇼핑몰** - 복합적인 타입 시스템 구축
4. **라이브러리 타입 정의** - 타입 선언 파일 작성 연습

## 🔗 추가 참고 자료

- [TypeScript 공식 문서](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play/)
- [TypeScript Cheat Sheets](https://www.typescriptlang.org/cheatsheets/)
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) - 커뮤니티 타입 정의

## 💡 학습 팁

1. **점진적 학습**: 기존 JavaScript 프로젝트에 점진적으로 TypeScript를 도입
2. **실제 프로젝트 적용**: 학습한 내용을 즉시 실제 프로젝트에 적용
3. **타입 에러 읽기**: 컴파일러 오류 메시지를 자세히 읽고 이해하기
4. **커뮤니티 활용**: Stack Overflow, GitHub Issues에서 실제 문제들 살펴보기
5. **코드 리뷰**: 오픈소스 TypeScript 프로젝트의 코드 스타일 참고

---

> 💡 **중요**: 이론보다는 실습 위주로 학습하되, 각 개념을 완전히 이해한 후 다음 단계로 넘어가는 것을 권장합니다. 특히 제네릭과 유틸리티 타입은 현업에서 매우 자주 사용되므로 충분히 연습하시기 바랍니다.
