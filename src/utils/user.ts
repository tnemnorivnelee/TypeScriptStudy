export interface User {
  readonly name: string;
  readonly age: number;
  readonly isActive: boolean;
  readonly createdAt: Date;
}

export function greetUser(user: User): string {
  const status = user.isActive ? "활성" : "비활성";
  return `안녕하세요, ${user.name}님! 현재 상태는 ${status}입니다.`;
}

export function isAdult(user: User): boolean {
  return user.age >= 18;
}

export function isValidUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' && obj !== null && 'name' in obj && 'age' in obj &&
    'isActive' in obj && 'createdAt' in obj
  );
}