const Autocomplete = (theme: any, skin: any) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          ...(skin === 'bordered' && { boxShadow: 'none', border: `1px solid ${theme.palette.divider}` })
        }
      }
    }
  }
}

export default Autocomplete
