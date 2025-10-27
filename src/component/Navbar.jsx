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
      <div>
        <div className="flex justify-end p-3">
          <User />
          <p className="text-lx">로그인</p>
        </div>
      </div>

      <div>
        <div className="flex justify-center ">
          <img src="https://asset.29cm.co.kr/next-contents/2023/06/08/3f8131682d124d16b336774ba51c4a3e_20230608162823.png" />
        </div>
      </div>

      <div className="flex justify-between items-center p-10 ">

          <ul className="flex justify-center gap-8 w-full">
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>


        <div className="flex justify-center gap-2">
          <Search />
          <input
            type="text"
            placeholder="제품검색"
            className="border-b border-gray-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
