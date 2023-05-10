import {createStore} from 'vuex'
import clothes from './modules/clothes'

const store = createStore({

    modules: {
        clothes
    }

})

export default store