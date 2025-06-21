// 유틸리티 타입 활용
export type DateFormat = 'short' | 'long' | 'numeric';

export function formatDate(
  date: Date,
  format: DateFormat = 'short'
): string {
  const options: Intl.DateTimeFormatOptions = {
    short: { dateStyle: 'short' as const },
    long: { dateStyle: 'long' as const },
    numeric: {
      year: 'numeric' as const,
      month: '2-digit' as const,
      day: '2-digit' as const
    }
  }[format];

  return new Intl.DateTimeFormat('ko-KR', options).format(date);
}


// 제네릭 함수 예제
export function createResponse<T>(
  data: T,
  success: boolean = true
): { data: T; success: boolean; timestamp: string; } {
  return {
    data,
    success,
    timestamp: new Date().toISOString()
  };
}

// 비동기 함수 예제
export async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

