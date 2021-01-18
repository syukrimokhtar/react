
import { withRouter } from 'react-router-dom';

function Login({history}:any) {
    const handleLogin = () => {
       localStorage.setItem('auth', "1");
       history.push("/secured");
    }
    return <div>
        <h1>This is Login Page</h1>
        <button onClick={ handleLogin  }>Login</button>
    </div>;

}

export default withRouter(Login);