import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import './Contacts.css'

const data = [
  {
    id: 1,
    name: 'Carlos Santana',
    email: 'carlos.santana@dev.education',
    phone: '415-307-3112'
  },
  {
    id: 2,
    name: 'John Smith',
    email: 'john.smith@dev.education',
    phone: '223-344-5122'
  },
  {
    id: 3,
    name: 'Alexis Nelson',
    email: 'alexis.nelson@dev.education',
    phone: '664-291-4477'
  }
]

type Contact = {
  id: number
  name: string
  email: string
  phone: string
}

type Props = {
  match: any
}

const Contacts: FC<Props> = (props) => {
  // For now we are going to add our contacts to our
  // local state, but normally this should come
  // from some service.
  const [contacts, setContacts] = useState<Contact[]>(data)

  // Let's see what contains the match object.
  console.log(props)

  const { match: { params: { contactId } } } = props
  
  // By default our selectedNote is false
  let selectedContact: any = false
  
  if (contactId > 0) {
    // If the contact id is higher than 0 then we filter it from our
    // contacts array.
    selectedContact = contacts.filter(
      contact => contact.id === Number(contactId)
    )[0];
  }

  const renderSingleContact = ({ name, email, phone }: Contact) => (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  )

  const renderContacts = () => (
    <ul>
      {contacts.map((contact: Contact, key) => (
        <li key={key}>
          <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="Contacts">
      <h1>Contacts</h1>
      {/* We render our selectedContact or all the contacts */}
      {selectedContact
        ? renderSingleContact(selectedContact)
        : renderContacts()}
    </div>
  )
}

export default Contacts