import '../../../style/src/post-add-form.css'

import React from 'react'

import { ButtonSubmit } from '@ui/button'
import { InputNewForm } from '@ui/input'

const PostAddForm = () => {
  return (
    <form className='bottom-panel d-flex'>
      <InputNewForm />
      <ButtonSubmit />
    </form>
  )
}

export default PostAddForm
