
import { withRouter } from 'react-router-dom';

function Home() {

    return <div>
        <h1>Home</h1>
        <a href="/login">Login</a>
    </div>;

}

export default withRouter(Home);