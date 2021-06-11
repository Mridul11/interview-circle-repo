import { ReactElement, useEffect } from "react"


export const About: React.FC= (props) : ReactElement => {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    useEffect(function(){
        document.title= "About"
    }, []);

    return(
        <div className ="ui container">
        <h1>i am About</h1>
    </div>
        )
    }

About.defaultProps = {
    menuItems: []
}