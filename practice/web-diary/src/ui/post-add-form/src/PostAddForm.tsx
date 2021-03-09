import React from 'react'

import '../../../style/src/post-add-form.css'
import { InputNewForm } from '@ui/input'
import { ButtonSubmit } from '@ui/button'

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <InputNewForm />
      <ButtonSubmit />
    </form>
  )
}

export default PostAddForm
