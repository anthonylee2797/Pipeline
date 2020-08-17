import {
  createSlice,
  PayloadAction,
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import { v4 as uuid } from 'uuid';

// createslice combines action constants

const jobInitialState = [
  {
    id: uuid(),
    job: 'Amazon',
    status: 'Applied',
  },
  {
    id: uuid(),
    job: 'Apple',
    status: 'Accepted',
  },
  {
    id: uuid(),
    job: 'Microsoft',
    status: 'Rejected',
  },
];

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: jobInitialState,
  reducers: {
    editJob: {
      edit: (state, action) => {
        const { id, status } = action.payload;
        const jobToEdit = state.find((job) => job.id === id);
        if (jobToEdit) {
          jobToEdit.status = action.status;
        }
      },
      create: (state, action) => {
        const { id, job } = action.payload;
        state.push({
          id: uuid(),
          job: job,
          status: 'Pending',
        });
      },
    },
  },
});

export const { addJob, editJob } = jobsSlice.actions;

const reducer = combineReducers({
  jobs: jobsSlice.reducer,
});

export default configureStore({
  reducer,
});
