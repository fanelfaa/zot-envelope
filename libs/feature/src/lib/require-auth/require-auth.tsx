import { useUserStore } from '@zot-envelope/data-access';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const location = useLocation();
	const apikey = useUserStore((state) => state.apikey);

	if (!apikey) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};

export default RequireAuth;
