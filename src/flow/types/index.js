// @flow

export type City = {
  +averageCommuteMinutes: number,
  +crimeIndex: number,
  +id: string,
  +image: string | null,
  +latitude: number,
  +longitude: number,
  +medianHomePrice: number,
  +name: string,
  +population: number,
  +populationDensity: number,
  +povertyRate: number,
  +stateName: string,
  +unemploymentRate: number,
}

export type Navigator = {
  +dismissModal: () => void,
  +push: (options: { +screen: string }) => void,
  +pop: () => void,
  +showModal: (options: { +screen: string }) => void,
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

export type Icon = {
  +scale: number,
  +uri: string,
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
