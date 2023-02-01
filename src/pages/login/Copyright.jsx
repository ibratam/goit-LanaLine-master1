import React from 'react'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const Copyright = (props) => {
  return (
    <>
      <Typography variant="body2"
        color="text.secondary"
        align="center"
        marginBottom={'10px'}
        fontFamily="fantasy"
        fontSize={'20px'}
        {...props}>

        {'Powered By '}
      </Typography>

      <Link color="#890ab4" href="https://www.goit.ps/">
        <img
          width={'120px'}
          src={ 'https://img2.gimm.io/50ea97bc-de53-4ab0-af72-8a744393a050/-/resize/300x200/img.png'}
        />
      </Link>{' '}
      {/* {new Date().getFullYear()} */}
      {'.'}
    </>
  )
}
