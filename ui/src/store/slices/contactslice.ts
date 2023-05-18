import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Contact } from '../../interfaces/contacts'
import { contactsState } from '../../interfaces/contactstate'

const ContactsArr: Contact[] = []

const initialState: contactsState = {
  contacts: ContactsArr,
  editingcontact: '',
  isCreating: false,
}

export const contactsSlice = createSlice({
  name: 'contacts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateContact: (state, action: PayloadAction<Contact>) => {
      state.contacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          contact = action.payload
        }
        return contact
      })
    },
    createContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.unshift(action.payload)
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      )
    },
    updateEditingElement: (state, action: PayloadAction<string>) => {
      state.editingcontact = action.payload
    },
    toggleCreationStatus: (state, action: PayloadAction<boolean>) => {
      state.isCreating = action.payload
    },
  },
})

export const {
  createContact,
  updateContact,
  deleteContact,
  updateEditingElement,
  toggleCreationStatus,
} = contactsSlice.actions

export default contactsSlice.reducer
