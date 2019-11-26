import { useState } from 'react'
import axios from 'axios'

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = async e => {
    e.preventDefault()
    const { data } = await axios.post('/api/form', { firstName, lastName })
    console.log(data)
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <input type="submit" />
    </form>
  )
}

export default Form
