import { Contact } from '../../interfaces/contacts'
import { CardView } from './cardview'

export const ContactsView = ({ data }: { data: Contact[] }): JSX.Element => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
      {data.map((contact) => (
        <div
          key={contact.id}
          className='border-2 p-2 rounded-lg text-center justify-self-center'
        >
          <CardView contact={contact} />
        </div>
      ))}
    </div>
  )
}
