import React from "react";
import "./Blessing.css"

export default function Blessing() {
    const [Counter, setCounter] = React.useState(0);
    
    React.useEffect(() => {
        if (Counter === 101) {
            alert("اجرکم عندالله")
            setCounter(0)
        }
    }, [Counter])

    return (
        <div className="main">
            <h2>ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَآلِ مُحَمَّدٍ</h2>
            <button onClick={() => {
                setCounter(Counter + 1)
            }}>{Counter}</button>
        </div>
    )
}
