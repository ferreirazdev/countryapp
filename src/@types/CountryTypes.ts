export const FETCH_COUNTRIES_LOADING="FETCH_COUNTRIES_LOADING"
export const FETCH_COUNTRIES_SUCCESS="FETCH_COUNTRIES_SUCCESS"
export const FETCH_COUNTRIES_FAILURE="FETCH_COUNTRIES_FAILURE"

export type CountryReducerState = {
  countries: CountryState[],
  isLoading: boolean,
  error: string
}

export type CountryState = {
  name: string,
  capital: string,
  area: string,
  region: string,
  subregion: string,
  population: number,
  flag: string,
  latlng:number[],
}

export type FetchAllCountriesLoadingAction = {
  type: typeof FETCH_COUNTRIES_LOADING
}

export type FetchAllCountriesSuccessAction={
  type: typeof FETCH_COUNTRIES_SUCCESS
  payload: []
}
export type FetchAllCountriesFailureAction={
  type: typeof FETCH_COUNTRIES_FAILURE
  payload: string
}

export type CountryActions = FetchAllCountriesLoadingAction | FetchAllCountriesSuccessAction | FetchAllCountriesFailureAction

