import './App.css'
import MUIaccordion from './components/MUIaccordion'
import MUIappbar from './components/MUIappbar'
import MUIautocomplete from './components/MUIautocomplete'
import MUIavatar from './components/MUIavatar'
import MUIbadge from './components/MUIbadge'
import MUIbox from './components/MUIbox'
import MUIbutton from './components/MUIbutton'
import MUIcard from './components/MUIcard'
import MUIcheckbox from './components/MUIcheckbox'
import MUIdrawer from './components/MUIdrawer'
import MUIgrid from './components/MUIgrid'
import MUIimagelist from './components/MUIimagelist'
import MUIselect from './components/MUIselect'
import MUIstack from './components/MUIstack'
import MUItextField from './components/MUItextField'
import MUItooltip from './components/MUItooltip'

function App() {

  return (
    <>
      <MUIbutton />
      <MUItextField />
      <MUIselect />
      <MUIcheckbox />
      <MUIautocomplete />
      <MUIbox />
      <MUIstack />
      <MUIgrid />
      <MUIcard/>
      <MUIaccordion/>
      <MUIappbar/>
      <MUIimagelist/>
      <MUIdrawer/>
      <MUIbadge/>
      <MUIavatar/>
      <MUItooltip/>
    </>
  )
}

export default App

// https://mui.com/material-ui/getting-started
// npm install @mui/material @emotion/react @emotion/styled
// icon için → npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

//* MateryalUI: Bootstrap gibi hazır yapıları koda entegre eder.