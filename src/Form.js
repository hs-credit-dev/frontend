import {React, useState} from 'react'

const Form = () => {
    const [about, setAbout] = useState('')

    const handleAboutChange = () => {

    }
    return (
      <form>
          <label>
              Edit About:
              <input type="text" name="about" onChange={handleAboutChange}/>
          </label>
          <input type="submit" name="submit" />
      </form>
    )
}

export default Form
