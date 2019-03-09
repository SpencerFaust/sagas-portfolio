import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProjectList(action) {
    try {
        console.log('fetch action', action);
        const projectResponse = yield axios.get('/projectlist');
        yield put({type:'SET_PROJECTS', payload: projectResponse.data});
     }catch (error) {
        console.log('GET error:', error);
      };
};

function* deleteProject(action) {
    try {
      console.log('delete action', action);
      yield axios.delete('/projectlist/' + action.payload);
      yield put({ type: 'FETCH_PROJECT_LIST' });
    } catch (error) {
      console.log('error with');
    };
  };

function* sagaWatcher() {
    yield takeEvery('FETCH_PROJECT_LIST', fetchProjectList)
    yield takeEvery('DELETE_PROJECT_LIST', deleteProject)
};

export default sagaWatcher;