import { useState } from 'react'
import { Contact } from '../../interfaces/contacts'
import { useAppDispatch } from '../../store/hooks'
import {
  createContact,
  toggleCreationStatus,
} from '../../store/slices/contactslice'

export const CreateContact = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const [contact, setContact] = useState<Contact>({
    id: `Task${Math.random()}`,
    firstName: '',
    lastName: '',
    status: 'inactive',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(createContact(contact))
    dispatch(toggleCreationStatus(false))
    setContact({
      id: '',
      firstName: '',
      lastName: '',
      status: 'inactive',
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className='border-2 p-5 rounded-lg md:w-96 mx-auto'>
      <form onSubmit={handleSubmit} className='mt-8 flex flex-col space-y-5'>
        <div>
          <label htmlFor='firstName' className='font-medium'>
            FirstName:{' '}
          </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            className='mx-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
            value={contact.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='lastName' className='font-medium'>
            LastName:{' '}
          </label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            className='mx-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
            value={contact.lastName}
            onChange={handleChange}
          />
        </div>

        <label className='font-medium justify-center items-center flex flex-row'>
          Status:
          <div className='mx-5 flex flex-col items-start'>
            <label>
              <input
                type='radio'
                id='status'
                name='status'
                value='active'
                className='mx-4'
                checked={contact.status === 'active'}
                onChange={handleChange}
              />
              Active
            </label>

            <label>
              <input
                type='radio'
                id='status'
                name='status'
                value='inactive'
                className='mx-4'
                checked={contact.status === 'inactive'}
                onChange={handleChange}
              />
              Inactive
            </label>
          </div>
        </label>

        <button
          type='submit'
          className='w-full px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-indigo-600 rounded-lg'
        >
          Save Contact
        </button>
      </form>
    </div>
  )
}
