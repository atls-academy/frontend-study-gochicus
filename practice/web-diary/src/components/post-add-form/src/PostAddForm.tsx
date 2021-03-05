import React from 'react'

import '../../../style/post-add-form.css'
import { InputNewForm } from '../../../ui/input/src'
import { ButtonSubmit } from '../../../ui/button/src'

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <InputNewForm />
      <ButtonSubmit />
    </form>
  )
}

export default PostAddForm
