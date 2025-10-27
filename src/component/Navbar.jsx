import { Search, User } from "lucide-react";

const Navbar = () => {
  const menuList = [
    "BEST",
    "WOMEN",
    "MEN",
    "INTERIOR",
    "KITCHEN",
    "DIGITAL",
    "CULTURE",
  ];

  return (
    <div>
      <div className="login-button">
        <User />
        <div>로그인</div>
      </div>

      <div className="nav-section">
        <img src="https://asset.29cm.co.kr/next-contents/2023/06/08/3f8131682d124d16b336774ba51c4a3e_20230608162823.png" />
      </div>

      <div className="flex justify-center items-center">
        <ul className="flex gap-10 items-center p-10">
          {menuList.map((menu, index) => (
            <li key={index} className="hover:text-gray-600">
              {menu}
            </li>
          ))}
        </ul>

        <div className="flex  items-center gap-5 right-15">
          <Search />
          <input
            type="text"
            placeholder="제품검색"
            className="border-b border-gray-500 focus:border-gray-600 focus:outline-none px-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
