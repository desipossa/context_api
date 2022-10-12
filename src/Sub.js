import { useContext } from "react"
import DeepSub from "./DeepSub"
import { DarkTheme } from './context';
const Sub = () => {
    const { dark } = useContext(DarkTheme)
    return (
        <div className={`App ${dark ? "on" : ""}`}>
            <DeepSub />
        </div>
    )
}
export default Sub