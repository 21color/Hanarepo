import { ReactNode } from 'react';

/**
 * TableProps
 * table 컴포넌트 props 타입 정의
 * 
 * @param {string[]} columns - 테이블 헤더 컬럼 ex) Object.keys(data[0])
 * @param {T[]} data - 테이블 데이터 배열
 * @param {(item: T, index: number) => ReactNode} renderRow - 테이블 로우 렌더링 함수
 * @param {string} className - 테이블 클래스명
 */

export interface TableProps<T> {
  columns: string[];
  data: T[];
  renderRow: (item: T, index: number) => ReactNode;
  className?: string;
}

/**
 * TableData
 * 테이블에 들어갈 데이터 타입 정의
 * 제네릭으로 다양한 타입을 받을 수 있음
 */

export interface TableData<T> {
  [key: string]: T;
}
