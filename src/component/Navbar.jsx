import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";


const MENU = [
  "BEST",
  "WOMEN",
  "MEN",
  "INTERIOR",
  "KITCHEN",
  "DIGITAL",
  "CULTURE",
  "NEW IN",
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-top">

        <div >
          <Link to="/product">
            <img
              src="https://asset.29cm.co.kr/next-contents/2023/06/08/3f8131682d124d16b336774ba51c4a3e_20230608162823.png"
              alt="29CM 로고"
              className="w-28 h-auto"
            />
          </Link>
        </div>


        <div className="nav-search">
          <Search className="ml-5"/>
          <input type="text" placeholder="검색" />
        </div>
        

        <div className="nav-login">
          <User />
          <span>로그인</span>
        </div>
      </div>


      <ul className="nav-menu">
        {MENU.map((item, i) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
