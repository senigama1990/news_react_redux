const initialState = {
  news: [],
  newsLoadingStatus: "Sukhrob",
  filters: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "NEWS_FETCHING":
      return {
        ...state,
        newsLoadingStatus: 'loading'
      }
    case "NEWS_FETCHED":
      return {
        ...state,
        news: action.payload,
        newsLoadingStatus: 'Sukhrob'
      }
    case "NEWS_FETCHING_ERROR":
      return {
        ...state,
        newsLoadingStatus: 'error'
      }
    
    default: 
      return state
  }
}

export default reducer;

