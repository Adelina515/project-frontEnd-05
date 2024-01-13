import { NavLink } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <NavLink to="/signup"> Sign Up</NavLink>
      <NavLink to="/signin"> Sign In</NavLink>
      <NavLink to="/welcome"> Welkome</NavLink>
      <NavLink to="/diary"> Diary</NavLink>
      <NavLink to="/exercises"> Eksercises</NavLink>
      <NavLink to="/products"> Products</NavLink>
      <NavLink to="/profile"> Profile</NavLink>
      <div>hello</div>
    </div>
  );
}
