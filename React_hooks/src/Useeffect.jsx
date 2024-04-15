import { useEffect, useState } from "react";
import Usestate from "./Usestate";

function Useeffect() {

    const [count, setcount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setcount((prev) => prev + 1);
        }, 10);
    },);

    return (
        <div>
            <h1>USEEFFECT:</h1>
            <h2>counter value :{count}</h2>
        </div>
    );
}
export default Useeffect;