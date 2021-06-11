import { ReactElement, useEffect } from "react"

export const User: React.FC = () : ReactElement => {
    useEffect(function(){
        document.title="User"
    }, []);

    return(
        <div className ="ui container">
            <h1>i am Contact</h1>
        </div>
        )
    }