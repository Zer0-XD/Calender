import logo from './logo.svg';
import './App.css';
import CalenderView from './components/CalenderView';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// pick a date util library
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import LuxonUtils from '@date-io/luxon';

const theme = createTheme({
  palette: {
    type: "dark",
  }
});


function App() {
  return (
    <div className="App center">
      <ThemeProvider theme={theme}>
       <CssBaseline />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CalenderView />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
