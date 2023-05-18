import { Empty } from '../../components/empty'
import { CreateContact } from '../../components/forms/createcontact'
import { UpdateContact } from '../../components/forms/updatecontact'
import { ContactsView } from './contactview'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { toggleCreationStatus } from '../../store/slices/contactslice'

export const Contacts = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const contactsdata = useAppSelector((state) => state.contacts.contacts)

  const editingContactid = useAppSelector(
    (state) => state.contacts.editingcontact
  )

  const creatingContact = useAppSelector((state) => state.contacts.isCreating)

  const handleCreation = () => {
    dispatch(toggleCreationStatus(true))
  }

  return (
    <div className='p-6 text-center pt-20 lg:ml-60 '>
      <div className='p-4 mt-2 border-2 border-gray-200 border-dashed rounded-lg'>
        {creatingContact ? (
          <CreateContact />
        ) : editingContactid ? (
          <UpdateContact contactid={editingContactid} />
        ) : (
          <>
            <button
              className='mt-5 px-4 py-2 text-white font-medium bg-blue-600 hover:bg-blue-500 active:bg-indigo-600 rounded-lg'
              onClick={handleCreation}
            >
              Create Contact
            </button>

            <div className='flex justify-center mt-10'>
              {contactsdata.length > 0 ? (
                <ContactsView data={contactsdata} />
              ) : (
                <Empty text='Contact' />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
