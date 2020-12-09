import axios from 'axios';
import taskAction from '../actions/tasksAction';
import { BACKEND_URI } from '../../constants.js';
import { refreshJWTmiddleware } from '../refresh';

const getAllTasks = () => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();
  if (!acToken) {
    return;
  }

  dispatch(taskAction.getAllTasksRequest());

  const url = `${BACKEND_URI}/tasks`;

  refreshJWTmiddleware(
    {
      method: 'get',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
    },
    refreshToken,
    dispatch,
  )
    .then((response) => {
      return dispatch(taskAction.getAllTasksSuccess(response.data));
    })
    .catch((err) => dispatch(taskAction.getAllTasksError(err)));
};

const сonfirmTask = (id) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();
  if (!acToken) {
    return;
  }
  // token.set(acToken);
  dispatch(taskAction.confirmTaskRequest());

  const url = `${BACKEND_URI}/tasks/confirm/${id}`;

  // axios
  //   .patch(url, {
  //     headers: {
  //       Authorization: 'Bearer ' + acToken,
  //     },
  //   })
  refreshJWTmiddleware(
    {
      method: 'patch',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
    },
    refreshToken,
    dispatch,
  )
    .then(() => dispatch(taskAction.confirmTaskSuccess(id)))
    .catch((err) => dispatch(taskAction.confirmTaskError(err)));
};
const notConfirmTask = (id) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();
  if (!acToken) {
    return;
  }
  // token.set(acToken);
  dispatch(taskAction.notconfirmTaskRequest());

  const url = `${BACKEND_URI}/tasks/notconfirm/${id}`;

  // axios
  //   .patch(url, {
  //     headers: {
  //       Authorization: 'Bearer ' + acToken,
  //     },
  //   })
  refreshJWTmiddleware(
    {
      method: 'patch',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
    },
    refreshToken,
    dispatch,
  )
    .then(() => dispatch(taskAction.notconfirmTaskSuccess(id)))
    .catch((err) => dispatch(taskAction.notconfirmTaskError(err)));
};

const addTask = (childId, title, reward, daysToDo) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();

  if (!acToken) {
    return;
  }

  dispatch(taskAction.addTaskRequest());

  const url = `${BACKEND_URI}/tasks/` + childId;
  const body = {
    title,
    reward,
    daysToDo,
  };
  // axios
  //   .post(url, body, {
  //     headers: {
  //       Authorization: 'Bearer ' + acToken,
  //     },
  //   })
  refreshJWTmiddleware(
    {
      method: 'post',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
      data: body,
    },
    refreshToken,
    dispatch,
  )
    .then((response) => {
      dispatch(taskAction.addTaskSuccess(response.data));
    })
    .catch((error) => console.log(error));
};

const deleteTask = (taskId) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();
  if (!acToken) {
    return;
  }
  dispatch(taskAction.deleteTaskRequest());
  const url = `${BACKEND_URI}/tasks/` + taskId;

  // axios
  //   .delete(url, {
  //     headers: {
  //       Authorization: 'Bearer ' + acToken,
  //     },
  //   })
  refreshJWTmiddleware(
    {
      method: 'delete',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
    },
    refreshToken,
    dispatch,
  )
    .then(() => dispatch(taskAction.deleteTaskSuccess(taskId)))
    .catch((err) => dispatch(taskAction.notconfirmTaskError(err)));
};

const repeatTask = (taskId) => (dispatch, getState) => {
  const {
    user: { accessToken: acToken, refreshToken },
  } = getState();

  if (!acToken) {
    return;
  }
  dispatch(taskAction.repeatTaskRequest());

  const url = `${BACKEND_URI}` + '/tasks/repeat/' + taskId;

  // axios
  //   .patch(
  //     url,
  //     {},
  //     {
  //       headers: {
  //         Authorization: 'Bearer ' + acToken,
  //       },
  //     },
  //   )
  refreshJWTmiddleware(
    {
      method: 'patch',
      headers: {
        Authorization: 'Bearer ' + acToken,
      },
      url,
    },
    refreshToken,
    dispatch,
  )
    .then((response) => dispatch(taskAction.repeatTaskSuccess(taskId)))
    .catch((error) => console.log(error));
};

export default {
  getAllTasks,
  сonfirmTask,
  notConfirmTask,
  addTask,
  deleteTask,
  repeatTask,
};
