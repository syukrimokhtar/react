import { withRouter } from 'react-router-dom';

function Secured({history}:any) {
    const handleLogout = () => {
       localStorage.removeItem('auth');
       history.push("/");
    }
    return <div>
        <h1>This is Secured Page</h1>
        <button onClick={ handleLogout }>Logout</button>
    </div>;

}

export default withRouter(Secured);