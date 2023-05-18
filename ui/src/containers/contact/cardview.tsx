import { useAppDispatch } from '../../store/hooks'
import {
  deleteContact,
  updateEditingElement,
} from '../../store/slices/contactslice'
import { Contact } from '../../interfaces/contacts'

export const CardView = ({ contact }: { contact: Contact }): JSX.Element => {
  const dispatch = useAppDispatch()

  const editContact = (id: string) => {
    dispatch(updateEditingElement(id))
  }

  const deletecontact = (id: string) => {
    dispatch(deleteContact(id))
  }

  return (
    <div className='block max-w-sm p-6 truncate'>
      <div className='flex flex-col items-center'>
        <span
          className={`flex-1 ml-3 whitespace-nowrap self-end rounded-md px-2 py-1 text-xs font-medium  ring-1 ring-inset  ${
            contact.status === 'active'
              ? 'bg-green-50 text-green-700 ring-green-600/20'
              : 'bg-red-50 text-red-700 ring-red-600/20'
          }`}
        >
          {contact.status}
        </span>
        <div className='text-4xl font-bold'>
          {contact.firstName}
          &nbsp;
          {contact.lastName}
        </div>
        <button
          className='mt-5 px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-lg'
          onClick={() => editContact(contact.id)}
        >
          Edit
        </button>
        <button
          className='mt-5 px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-lg'
          onClick={() => deletecontact(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
