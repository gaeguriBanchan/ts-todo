import { initializeApp } from 'firebase/app';
import { createSlice } from '@reduxjs/toolkit';
// action : 함수로서 store의 state를 업데이트 한다.
import type { PayloadAction } from '@reduxjs/toolkit';
// 초기값의 타입 정의
export type CounterState = {
  value: number;
};
// store 의 state 의 초기값 셋팅
const initialState: CounterState = {
  value: 0,
};
// 실제 활용할 slice 생성함
export const counterSlice = createSlice({
  // slice의 이름
  name: 'counter',
  // slice의 초기값
  // innitialState: initialState
  initialState,
  // 리듀서들을 배치
  reducers: {
    // 더하기 액션
    increment: (state) => {
      state.value += 1;
    },
    // 빼기 액션
    decrement: (state) => {
      state.value -= 1;
    },
    // 일정한 수 만큼 증감
    // action:PayloadAction<T>
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// 액션을 내보낸다
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// slice의 reducer를 내보낸다
export default counterSlice.reducer;
