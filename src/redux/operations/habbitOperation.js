import action from '../actions/allHabbitsAction';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:1717';

const addHabit = (value) => (dispatch) => {
  dispatch(action.addHabitRequest());

  axios
    .post('https://kidslike-back-end.herokuapp.com/api/habbits', value)
    .then((res) => {
      dispatch(action.addHabitSuccess(res.data));
    })
    .catch((err) => dispatch(action.addHabitError(err.message)));
};

const getAllHabbitsByUser = (value) => (dispatch, getState) => {
  dispatch(action.getAllRequest());

  axios.defaults.headers.common.Authorization = `Bearer ${
    getState().user.accessToken
  }`; // При авторизации токен не был записан в axios.defaults.headers.common.Authorization

  axios
    .get('https://kidslike-back-end.herokuapp.com/api/habbits')
    .then((response) => {
      dispatch(action.getAllSuccess(response.data));
    })
    .catch((err) => {
      dispatch(action.getAllError(err.message));
    });
};

const checkHabbit = (value) => (dispatch, getState) => {
  dispatch(action.updateCheckedRequest());
  axios
    .patch(
      'https://kidslike-back-end.herokuapp.com/api/habbits/checkhabbit',
      value,
    )
    .then((response) => {
      dispatch(
        action.updateCheckedSuccess({
          ...response.data,
          idHabbit: value.idHabbit,
        }),
      );
    })
    .catch((err) => dispatch(action.updateCheckedError(err.message)));
};

const delHabbit = (value) => (dispatch, getState) => {
  dispatch(action.deletedRequest());

  axios
    .delete('https://kidslike-back-end.herokuapp.com/api/habbits/' + value)
    .then((response) => {
      dispatch(action.deletedSuccess({ idHabbit: value }));
    })
    .catch((err) => dispatch(action.deletedError(err.message)));
};

const updateHabbit = (value) => (dispatch, getState) => {
  dispatch(action.updRequest());

  axios
    .patch(
      'https://kidslike-back-end.herokuapp.com/api/habbits/updatehabbit',
      value,
    )
    .then((response) => {
      dispatch(
        action.updSuccess({
          data: { ...response.data },
          changeId: value.idHabbit,
        }),
      );
    })
    .catch((err) => dispatch(action.updError(err.message)));
};

export default {
  addHabit,
  checkHabbit,
  delHabbit,
  updateHabbit,
  getAllHabbitsByUser,
};
