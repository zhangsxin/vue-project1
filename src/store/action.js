export default {
  addNum ({commit, state}, id) {
    console.log('下一题')
    // 点击额下一题，记录答案ID，判断是否为最后一题，如果不是则跳转下一题
    commit('REMBER_ANSWER', id)
    console.log('itemNum', state.itemNum)
    console.log('state.itemDetail.length', state.itemDetail.length)
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1)
    }
  },
  // 初始化信息
  initializeData ({commit}) {
    commit('INITIALIZE_DATA')
  }
}
