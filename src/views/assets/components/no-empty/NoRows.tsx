import React from 'react'
import Stack from '@mui/material/Stack'
import Translations from '@/@core/components/translations'

const NoRows = () => {
  return (
    <Stack height='100%' alignItems='center' justifyContent='center'>
      <Translations text='결과가 없습니다.' />
    </Stack>
  )
}

export default NoRows