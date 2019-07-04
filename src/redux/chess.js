import { bindActionCreators } from 'redux';
import * as chessMovesAPI from '../lib/chessMovesAPI';

// Actions
const SELECT_POSITION = 'chess/SELECT_POSITION';
const FETCHING_POSSIBLE_MOVES = 'chess/FETCHING_POSSIBLE_MOVES';
const RECEIVED_POSSIBLE_MOVES = 'chess/RECEIVED_POSSIBLE_MOVES';

// Initial state
const initialState = {
  positionSelected: undefined,
  possibleMoves: {
    loading: false,
    data: [],
  },
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_POSITION:
      const { positionSelected } = action.payload;
      return {
        ...state,
        positionSelected,
        possibleMoves: {
          loading: false,
          data: [],
        },
      };

    case FETCHING_POSSIBLE_MOVES:
      return {
        ...state,
        possibleMoves: {
          loading: true,
          data: [],
        },
      };

    case RECEIVED_POSSIBLE_MOVES:
      const { moves } = action.payload;
      return {
        ...state,
        possibleMoves: {
          loading: false,
          data: moves || [],
        },
      };

    default:
      return state;
  }
}

// Action creators
export function selectPosition(positionSelected) {
  return {
    type: SELECT_POSITION,
    payload: {
      positionSelected,
    },
  };
}

export function fetchingPossibleMoves() {
  console.log('fetchingPossibleMoves');
  return { type: FETCHING_POSSIBLE_MOVES };
}

export function updatePossibleMoves(moves) {
  return {
    type: RECEIVED_POSSIBLE_MOVES,
    payload: {
      moves,
    },
  };
}

export function getPossibleMoves() {
  return (dispatch, getState) => {
    dispatch(fetchingPossibleMoves());
    const {
      chess: { positionSelected },
    } = getState();

    chessMovesAPI
      .getPossibleMoves(positionSelected)
      .then(moves => {
        dispatch(updatePossibleMoves(moves));
      })
      .catch(() => {
        dispatch(updatePossibleMoves());
      });
  };
}

// Selectors
export function mapStateToProps({ chess }) {
  return { ...chess };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectPosition, fetchingPossibleMoves, updatePossibleMoves, getPossibleMoves },
    dispatch,
  );
}
