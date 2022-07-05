import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import './css/App.css';

function App() {
  const navigate = useNavigate();
  return (
      <div className="App">
        <Card className='Card'>
          <CardContent>
            <Typography variant="h5" className='Head' >
              Авторизация
            </Typography>
            <div className='Fields'>
              <TextField id="outlined-basic" label="Логин" variant="outlined" className='Form'/>
              <TextField id="outlined-basic" label="Пароль" variant="outlined" className='Form'/>
            </div>
          </CardContent>
          <CardActions>
            <div className='Button_Box'>
              <Button onClick={()=>navigate("pages/Page1")} variant="contained" className='But' style={{fontSize:"18px"}}>Войти</Button>
            </div>
          </CardActions>
        </Card>
      </div>
  );
}

export default App;
