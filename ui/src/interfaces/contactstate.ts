import { Contact } from './contacts'

export interface contactsState {
  contacts: Contact[]
  //   loading: boolean
  //   error: string
  //   success: string
  editingcontact: string
  isCreating: boolean
}
