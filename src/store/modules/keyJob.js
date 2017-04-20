import types from '../../utils/types.js'
import $ from 'jquery'

export const state = {
    keyJobData: []
};

export const mutations = {
    [types.KEYJOB](state) {
        $.ajax({
            url: '../../mock/keyJob.json',
            type: 'GET',
            ansync: true,
            success: function(msg) {
                state.keyJobData = msg;
            }
        })
    }
}