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

export function filtersFetching() {
  return {
    type: "FILTERS_FETCHING"
  }
}

export function filtersFetched(filters) {
  return {
    type: "FILTERS_FETCHED",
    payload: filters
  }
}

export function filtersFetchingError() {
  return {
    type: "FILTERS_FETCHING_ERROR"
  }
}

export function activeFilterChanged(filter) {
  return {
    type: "ACTIVE_FILTER_CHANGED",
    payload: filter
  }
}

export function newsDeleted(id) {
  return {
    type: 'NEWS_DELETED',
    payload: id
  }
}