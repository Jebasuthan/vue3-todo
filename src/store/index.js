import { createStore, createLogger } from 'vuex'
import user from './modules/user'
import todo from './modules/todo'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    user,
    todo
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
