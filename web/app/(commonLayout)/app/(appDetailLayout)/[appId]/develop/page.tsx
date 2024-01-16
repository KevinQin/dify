import React from 'react'
<<<<<<< HEAD
import { getDictionary } from '@/i18n/server'
=======
>>>>>>> main
import { type Locale } from '@/i18n'
import DevelopMain from '@/app/components/develop'

export type IDevelopProps = {
  params: { locale: Locale; appId: string }
}

const Develop = async ({
<<<<<<< HEAD
  params: { locale, appId },
}: IDevelopProps) => {
  const dictionary = await getDictionary(locale)

  return <DevelopMain appId={appId} dictionary={dictionary} />
=======
  params: { appId },
}: IDevelopProps) => {
  return <DevelopMain appId={appId} />
>>>>>>> main
}

export default Develop
