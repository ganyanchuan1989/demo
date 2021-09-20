/**
 * 向后端请求用户的菜单，动态生成路由
 */
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from "./mutationsType";

const counter = {
  namespaced: true,
  state: {
    count: 1,
  },
  getters: {
    count: (state) => {
      return state.count;
    },
  },
  mutations: {
    [COUNTER_INCREMENT]: (state, count) => {
      state.count = state.count + count;
    },
    [COUNTER_DECREMENT]: (state, count) => {
      state.count = state.count - count;
    },
  },
  actions: {
    asyncIncrement: ({ commit }, count) => {
      /**
       * const { commit, dispatch, state } = context;
       *  commit: 提交mutation
       *  dispatch: 派发其他action
       *  state 获取原始数据
       */
      // 模拟延时
      setTimeout(() => {
        commit(COUNTER_INCREMENT, count);
      }, 2000);
    },
    asyncDecrement: ({ commit }, count) => {
      // 模拟延时
      setTimeout(() => {
        commit(COUNTER_DECREMENT, count);
      }, 2000);
    },
  },
};

export default counter;
