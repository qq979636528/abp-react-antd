import modelExtend from 'dva-model-extend';
import { pageModel } from '@/utils/model';

export default modelExtend(pageModel, {
    namespace: 'account',

    state: {

    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {

            })
        },
    },

    effects: {

    },

    reducers: {

    },
})
