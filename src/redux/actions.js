export function newsFetching() {
  return {
    type: "NEWS_FETCHING"
  }
}

export function newsFetched(news) {
  return {
    type: "NEWS_FETCHED",
    payload: news
  }
}

export function newsFetchingError() {
  return {
    type: "NEWS_FETCHING_ERROR"
  }
}

export function newsCreated(news) {
  return {
    type: "NEWS_CREATED",
    payload: news
  }
}