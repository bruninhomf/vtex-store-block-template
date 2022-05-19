import * as React from 'react'
import { InputLead } from '../src/components/Form/InputLead'
import { ButtonLead } from '../src/components/Form/ButtonLead'

interface CountdownProps { }

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ }) => {
  return (
    <>
      <form>
        <InputLead
          type='txt'
          name='firstName'
          text='Nome'
          value=''
          placeholder=''
        />
        <InputLead
          type='txt'
          name='lastName'
          text='Sobre Nome'
          value=''
          placeholder=''
        />
        <InputLead
          type='txt'
          name='email'
          text='E-mail'
          value=''
          placeholder=''
        />
        <InputLead
          type='txt'
          name='whatsapp'
          text='WhatsApp'
          value=''
          placeholder=''
        />
        <ButtonLead
          name='send'
          type='button'
          text='Salvar'
        />
      </form>
    </>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default Countdown
