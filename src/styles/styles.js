const useStyles = () => ({

  clignote: {
    animation: 'clignote 2s linear infinite',
    color: 'red',
    border: '1px solid red'
  },
  '@keyframes clignote': {

    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    }
  },
  test: {
    background: 'red'
  }

}, { index: 999 });

export default useStyles;