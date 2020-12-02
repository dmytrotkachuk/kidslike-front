import addChildActions from '../../components/AddChildForm/AddChildActions';
import { createReducer } from '@reduxjs/toolkit';

const fakeChildrens = [
  // Заглушка
  {
    _id: '5fb7ac03930dc826c4b85a32',
    name: 'Эдик',
    gender: 'male',
    stars: 13,
    tasks: [{ title: 'Помыть посуду', reward: 5 }],
  },
  {
    _id: '5fc2b3af43def7b68ce8add0',
    name: 'Маша',
    gender: 'female',
    stars: 33,
    tasks: [
      { title: 'Помыть посуду', reward: 7 },
      { title: 'Помыть посуду', reward: 13 },
    ],
  },
];

const childrens = createReducer(fakeChildrens, {
  [addChildActions.addChildSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
});

export default {
  childrens,
};
