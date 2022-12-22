import P from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
// Contexts
import { useAuth } from '../contexts/auth';

function RequireAuth({ children }) {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ path: location.pathname }} />;
    }

    return children;
}

RequireAuth.propTypes = {
    children: P.node.isRequired,
};

export default RequireAuth;
