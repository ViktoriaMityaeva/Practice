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
    const navigate = useNavigate();
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Цветы
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
                            АЛЬСТРОМЕРИЯ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Альстромерия, она же перуанская лилия или лилия инков — это чарующий цветок родом из Южной Америки, который коренные обитатели континента считали даром Солнечного божества и потому наделяли его магическими свойствами. Неудивительно, что красота и грация альстромерии в свое время покорили и Европу. Пестрые, яркие, широко раскрывающиеся цветки альстромерии хоть и не имеют аромата, зато очень декоративны, прекрасно смотрятся в составе букетов и долго сохраняются срезанными в вазе с водой.
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="CardMain">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            АСТРАНЦИЯ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Астранция, или звездовка – луговой цветок, распространенный в странах Центральной, Восточной и Южной Европы, а также на Кавказе. Среди множества видов этого травянистого растения встречается некоторое количество форм с декоративными цветами, которые нашли свое применение во флористике.                    </Typography>
                    </CardContent>
                </Card>

                <Card className="CardMain">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            ГИАЦИНТ
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Гиацинт – это цветок потрясающей красоты с приятным ароматом из семейства Спаржевых. В древности его выращивали у храмов бога Аполлона в память о его погибшем друге, сыне царя Спарты Гиацинте, в честь которого цветок и получил свое название.                    </Typography>
                    </CardContent>
                </Card>

                <Card className="CardMain">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            ЛИЗИАНТУС
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Лизиантус, он же эустома Рассела – это изысканно цветущий представитель дикорастущих лугов Центральной Америки. На родине его называют техасским колокольчиком, тюльпановой горечавкой , а иногда и японской или ирландской розой. Последние две ассоциации возникли неспроста, поскольку цветы лизиантуса по своей форме напоминают раскрывшиеся наполовину бутоны розы. У большинства диких разновидностей цветки представлены всевозможными оттенками синего, однако благодаря усилиям селекционеров были выведены гибриды с соцветиями белого, лилового, розового, красного, жёлтого и абрикосового окраса. Кроме того, встречаются особо эффектные разновидности лизиантуса с двухцветными цветками, окаймленными контрастными оттенками.                    </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
export default Page1;