const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'

export default {
  // 初始化值
  [INITIALIZE_DATA] (state) {
    state.itemNUm = 1
    state.allTime = 0
    state.answerid = []
  },
  // 记录答案
  [REMBER_ANSWER] (state, id) {
    state.answerid.push(id)
    // console.log('state.answerid', state.answerid)
  },
  // 点击进入下一题
  [ADD_ITEMNUM] (state, num) {
    state.itemNum += num
    console.log('进入下一题')
    console.log('state.itemNum', state.itemNum)
  },
  // 记录做题时间
  [REMBER_TIME] (state) {
    state.timer = setTimeout(() => {
      state.allTime++
    }, 1000)
  }
}
