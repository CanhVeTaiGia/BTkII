import { useLocation } from "react-router-dom"

export default function Account() {
  const location = useLocation();
  console.log(location);
  
  return (
    <h2>Account</h2>
  )
}
