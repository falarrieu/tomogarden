import {Button, ButtonGroup} from "@mui/material";
import {Link} from "react-router-dom";

export default function MenuRouter(){
    return(
        <div className="MenuRouter">
            <ButtonGroup>
                <Link to='/'>
                    <Button >Home</Button>
                </Link>
                <Link to='/Social'>
                    <Button>Social</Button>
                </Link>
                <Link to='/Market'>
                    <Button>Market</Button>
                </Link>
            </ButtonGroup>
        </div>
    )
}