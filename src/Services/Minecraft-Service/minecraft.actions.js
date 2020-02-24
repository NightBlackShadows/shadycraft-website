import constants from './minecraft.constants';
import axios from 'axios';
import conf from '../../conf/backend.conf.js'

const IP = conf.botIp + ":" + conf.botPort;

/**
 * Logs in a user, and stores the login token in axios
 */
export const online = user => dispatch => {
    axios
        .get(IP + '/api/minecraft' )
        .then(res => {
            dispatch({ type: constants.ONLINE, payload: res.data });
        })
        .catch(error => {
            alert('Did not get a responce from servern\n' + {error});
        });
};

/**
 * Register a user
 */
export const getUsers = user => dispatch => {
    axios
        .post(conf.ip + '/api/minecraft/users', {
        })
        .then(res => {
            dispatch({ type: constants.REGISTER, payload: res.data });
        })
        .catch(error => {
            alert('Unable to get a responce from server\n' +  {error});
        });
};
