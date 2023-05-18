import { CountryInformation } from './countryInfo'

export interface CountryData {
  country: string
  countryInfo: CountryInformation
  active: number
  recovered: number
  deaths: number
}
