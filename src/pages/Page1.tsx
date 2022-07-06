import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";
import '../css/Page1.css';


function Page1() {
    const [auth] = React.useState(true);
    const login = localStorage.getItem("login");
    const navigate = useNavigate();

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Насекомые
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{position:"absolute", right:"90px"}}>
                        Пользователь:
                        {login}
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                onClick={()=>navigate("/")}
                                color="inherit"
                            >
                                <LogoutIcon style={{width:"30px", height:"30px"}}/>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <div className="Cards">
                <div className="Buttons">
                    <IconButton onClick={()=>navigate("/pages/Page1")}>
                        <NavigateBeforeIcon style={{width:"30px", height:"30px"}}/>
                    </IconButton>
                    <IconButton onClick={()=>navigate("/pages/Page2")}>
                        <NavigateNextIcon style={{width:"30px", height:"30px"}}/>
                    </IconButton>
                </div>

                <Card className="CardMain">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Шмель
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Крылатое, членистоногое насекомое, проходящее по мере взросления через полное превращение из червеобразной сущности в красивое насекомое, покрытое густыми, похожими на шерсть волосками. Принадлежит к семейству пчел, роду шмели. Размер зависит от пола – варьируется от 7 до 35 мм. Туловище коричневое, с желтыми вставками. Шмели могут собирать нектар, природа оснастила их специальными хоботками.
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="CardMain">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Светлячок
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Жесткокрылое насекомое величиной от 4 мм до 3 см. Тело уплощенное, покрыто волосками. Светлячок способен летать, у него 2 пары крыльев, одна из которых превратилась в надкрылья. Голова большая, глаза круглые, есть усики, ротовой аппарат присутствует только у личинок или самок, у самцов его нет. Способность к свечению в темноте также зависит от пола.
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="CardMain">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Бабочка
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Чешуекрылое насекомое с покрытым хитиновой оболочкой телом и хорошо выраженными крыльями. Ученые выделяют более 158 тысяч видов. Живут они почти везде, за исключением Антарктиды. Больше всего типов бабочек обитает в Перу и в Индии. Питаются пыльцой и нектаром растений. Но могут употреблять в пищу сок дерева или гниющие плоды. Иногда бабочки крадут мед из пчелиных ульев.
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="CardMain">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Пчела
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Общественное животное, способное совместно с другими членами своего роя строить гнезда (ульи), добывать нектар и перерабатывать его в мед. Тело пчелы покрыто пушистыми ворсинками, крылья хорошо развиты, имеется жало, с помощью которого она добывает нектар. Также оно используется для защиты от нападения врагов. Распространены пчелы повсеместно в огромном количестве, но больше всего их там, где присутствуют цветущие растения.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
export default Page1;