import { NAVIGATION } from '../actions';

const initialState = {
  activePath: null,
  pageLoading: true,
  queries: {},
};

export const navigation = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATION.CHANGE_ACTIVE_PATH:
      return {
        ...state,
        activePath: action.activePath,
        queries: { ...state.queries, ...action.queries },
      };
    case NAVIGATION.SET_PAGE_LOADING:
      return {
        ...state,
        pageLoading: action.pageLoading,
      };
    case NAVIGATION.SET_QUERY: {
      return {
        ...state,
        queries: { ...state.queries, ...action.queries },
      };
    }
    default:
      return state;
  }
};
