import { ReactElement, useEffect } from "react"

export const Contact: React.FC = () : ReactElement => {
    useEffect(function(){
        document.title="Contact"
    }, []);

    return(
        <div className ="ui container">
            <h1>i am Contact</h1>
        </div>
        )
    }