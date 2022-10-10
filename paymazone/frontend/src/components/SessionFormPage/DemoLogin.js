import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

const DemoLogin = ({dispatch}) => {
    const [email, password] = {email: 'payton@aa.io', password: 'password1'};
    dispatch(sessionActions.login({email, password}))
    return (<Redirect to='/'/>)
}

export default DemoLogin