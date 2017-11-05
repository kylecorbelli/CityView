// @flow

export type City = {
  +id: string,
  +name: string,
  +population: number,
  +populationDensity: number,
  +image: string | null,
  +latitude: number,
  +longitude: number,
}

export type AppState = {
  +entities: {
    +cities: CitiesState,
  },
}

export type CitiesState = {
  +loading: boolean,
  +byId: CitiesByIdState,
}

export type CitiesByIdState = {
  [string]: City,
}

export type FetchCitiesRequestSent = {
  +type: 'FETCH_CITIES_REQUEST_SENT',
}

export type FetchCitiesRequestFailed = {
  +type: 'FETCH_CITIES_REQUEST_FAILED',
}

export type FetchCitiesRequestSucceeded = {
  +type: 'FETCH_CITIES_REQUEST_SUCCEEDED',
  +payload: {
    +citiesById: CitiesByIdState,
  },
}

export type Action = FetchCitiesRequestSent
  | FetchCitiesRequestFailed
  | FetchCitiesRequestSucceeded
