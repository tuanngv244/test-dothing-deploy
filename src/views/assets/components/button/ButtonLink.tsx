import Link from 'next/link'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { WIDTH_MEDIUM } from '@/@core/configs'
import ArrowRightColor from '@/@core/components/icons/ArrowRightColor'

const StyledLink = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(0),
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}))

const Label = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(2),
  color: theme.palette.primary.main + '!important',
  fontSize: '20px !important',
  whiteSpace: 'nowrap',
  fontWeight: 700,

  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    fontSize: '24px !important'
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '16px !important'
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(1)
  },
  [theme.breakpoints.down('xs')]: {}
}))

const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    width: '20px'
  },
}))

type ButtonLinkProps = {
    href?: string,
    label?: string,
    click?: boolean,
    handleLoadMore?: any
}

const ButtonLink = ({ href = '/', label = 'See more', click = false, handleLoadMore }: ButtonLinkProps) => {
  const handleClick = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()
    handleLoadMore && handleLoadMore()
  }

  const theme = useTheme()

  return (
    <>
      {click ? (
        <Link href={href} passHref style={{textDecoration: 'none'}}>
          <StyledLink onClick={handleClick}>
            <Label variant='h6'>{label}</Label>
            <ArrowRightColor color={theme.palette.primary.main}/>
          </StyledLink>
        </Link>
      ) : (
        <Link href={href} passHref style={{textDecoration: 'none'}}>
          <StyledLink>
            <Label variant='h6'>{label}</Label>
            <ArrowRightColor color={theme.palette.primary.main}/>
          </StyledLink>
        </Link>
      )}
    </>
  )
}

export default ButtonLink
