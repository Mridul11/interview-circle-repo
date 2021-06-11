import { ReactElement } from "react"
import {Link} from 'react-router-dom';

interface IProps {
    menuItems: Array<string>
}

export const Menu: React.FC<IProps> = (defaultProps?:IProps) : ReactElement => {
    return(
        <div className = "ui four item menu">
            { defaultProps?.menuItems.map(
                (route, idx) => route !== "" ? 
                    <Link key={idx} className={"item active"} to={route}>{ route }</Link>: 
                    <Link key={idx} className={"item active"} to={route}>{ "Main" }</Link>
            ) }
        </div>
        )
    }

Menu.defaultProps = {
    menuItems: []
}