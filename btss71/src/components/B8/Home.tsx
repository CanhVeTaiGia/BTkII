import { useSelector } from "react-redux"
import { RootType, User } from "../../interface/interface"
import { useLocation } from "react-router-dom"

export const Home: React.FC = () => {
    const users = useSelector((state: RootType) => {
        return state.userReducer
    })
    const location = useLocation();
    return <>{
        users.filter((item: User) => {
            return (item.id === location.state.id?
            <div className="w-[200px]">
                <p>{item.id}</p>
                <p>{item.username}</p>
                <p>{item.password}</p>
            </div> : "")
        })
    }</>
}