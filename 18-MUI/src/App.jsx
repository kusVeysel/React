import './App.css'
import MUIautocomplete from './components/MUIautocomplete'
import MUIbutton from './components/MUIbutton'
import MUIcheckbox from './components/MUIcheckbox'
import MUIselect from './components/MUIselect'
import MUItextField from './components/MUItextField'

function App() {

  return (
    <>
      <MUIbutton />
      <MUItextField />
      <MUIselect />
      <MUIcheckbox/>
      <MUIautocomplete/>
    </>
  )
}

export default App

// https://mui.com/material-ui/getting-started
// npm install @mui/material @emotion/react @emotion/styled
// icon için → npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

//* MateryalUI: Bootstrap gibi hazır yapıları koda entegre eder.