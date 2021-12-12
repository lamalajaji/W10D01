import Link from "next/link";
function NavBar() {
  return(
  <div>
    <ul> 
     

   <li>  <Link href="/Home">  Posts </Link> </li>
   <li><Link href="/About"> About  </Link></li>
   <li> <Link href="/Contact"> Contact  </Link></li>
    </ul>
    
    </div> 
    )
}

export default NavBar;
