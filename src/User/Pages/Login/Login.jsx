
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '../../../Services/Context/Context.jsx';

const Login = () => {
  const navigate = useNavigate();
  const { login, isAdmin } = useAuth();

  if (isAdmin) return <Navigate to="/admin" />;
  return (
    <>
      <form action="">
        <input type="text" placeholder='User name' />
        <input type="password" placeholder='Password' />
        <button 
          onClick={() => {
            login({ username: "admin", password: "password" });
            navigate("/admin");
          }}>Submit</button>
      </form>
    </>
  )
}

export default Login
