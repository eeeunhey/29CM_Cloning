import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const search = (e) => {
    if(e.key==="Enter") {
      console.log("뭐가 눌렸나",e.key)
      let keyword = e.target.value
      console.log(keyword)
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-top">
        <div>
          <Link to="/">
            <img
              src="https://asset.29cm.co.kr/next-contents/2023/06/08/3f8131682d124d16b336774ba51c4a3e_20230608162823.png"
              alt="29CM 로고"
              className="w-28 h-auto"
            />
          </Link>
        </div>

        <div className="nav-search">
          <Search className="ml-5" />
          <input
            type="text"
            placeholder="찾으시는 상품을 입력하세요"
            onKeyDown={search}
          />
        </div>

        <div className="login-button" onClick={goToLogin}>
          <User />
          <div>로그인</div>
        </div>
      </div>

      <ul className="nav-menu">
        {MENU.map((item, i) => (
          <Link to="/products">{item}</Link>
        ))}
      </ul>
    </nav>
  );
}
