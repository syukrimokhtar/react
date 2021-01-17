import { useHistory, withRouter } from 'react-router-dom';

function Secured() {

    const history = useHistory();

    const handleLogout = () => {
       localStorage.setItem('auth', "0");
       history.push("/");
    }

    return <div>
        <h1>This is Secured Page</h1>
        <button onClick={ handleLogout }>Logout</button>
    </div>;

}

export default withRouter(Secured);