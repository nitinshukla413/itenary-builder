import MuiChip from '@mui/material/Chip'
import clsx from 'clsx'

const Chip = (props: any) => {
  const { sx, skin, color, rounded } = props
  const colors: any = {
    primary: {
      color: '#cce',
      backgroundColor: '#cece',
    },
    secondary:{
      color: '#000',
      backgroundColor: '#EEEFF1',
    },
    success:{
      backgroundColor: '#EEFBE8',
      color : '#69AF54',
    },
    error: {
      color: '#F3462B',
      backgroundColor: '#FAE0DC',
    },
    warning: {
      color: '#F0B938',
      backgroundColor: '#FEF6E7',
    },
    info:{
      color: '#cce',
      backgroundColor: '#cece',
    },
  }

  const propsToPass = { ...props }

  propsToPass.rounded = undefined
  return (
    <MuiChip
      {...propsToPass}
      variant='filled'
      className={clsx({
        'MuiChip-rounded': rounded,
        'MuiChip-light': skin === 'light'
      })}
      sx={skin === 'light' && color ? Object.assign(colors[color], sx) : sx}
    />
  )
}

export default Chip
