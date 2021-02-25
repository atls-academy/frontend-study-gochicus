import { openModal } from './modalWindow'
import { closeModal } from './modalWindow'
import { sendFormData } from '../services/service'

function formDataExtraction(formSelector: string) {
  const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll(formSelector)

  const serverMessage = {
    loading: '../src/assets/img/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    error: 'Что-то пошло не так...',
  }

  forms.forEach((item: HTMLFormElement) => {
    postData(item)
  })

  function postData(form: HTMLFormElement) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()

      const statusMessage: HTMLImageElement = document.createElement('img')
      statusMessage.src = serverMessage.loading
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `
      form.insertAdjacentElement('afterend', statusMessage)

      const formData: FormData = new FormData(form)

      const toJSON = JSON.stringify(Object.fromEntries(formData.entries()))

      sendFormData('https://6027afc0dd4afd001754a9b0.mockapi.io/api/users', toJSON)
        .then((response: Response) => {
          if (response.ok) {
            return Promise.resolve(response).then(() => {
              showThanksModal(serverMessage.success)
              statusMessage.remove()
            })
          }
          return Promise.reject(response).then(() => {
            showThanksModal(serverMessage.error)
          })
        })
        .catch(() => {
          showThanksModal(serverMessage.error)
        })
        .finally(() => {
          form.reset()
        })
    })
  }

  function showThanksModal(thanksMessage: string) {
    const previousModalDialog = document.querySelector('.modal__dialog')

    previousModalDialog.classList.add('hide')
    openModal()

    const thanksModal = document.createElement('div')
    thanksModal.classList.add('modal__dialog')
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${thanksMessage}</div>
            </div>
        `
    document.querySelector('.modal').append(thanksModal)
    setTimeout(() => {
      thanksModal.remove()
      previousModalDialog.classList.add('show')
      previousModalDialog.classList.remove('hide')
      closeModal()
    }, 4000)
  }
}

export { formDataExtraction }
