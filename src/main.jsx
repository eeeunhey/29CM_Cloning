import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import LoginPage from "./page/LoginPage.jsx";
import ProductAll from "./page/ProductAll.jsx";

import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute.jsx";

// 라우트 정의하기
//1. 전체 상품페이지, 로그인, 상품상세페이지
// 1-1 Navigation을 만들어보장
// NavbBar를
//2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4. 상품 디테일 눌렀으나 로그인이 안될경우에는 로그인 페이지가 먼저 나온다
//5. 로그인이 되어있을경우 상품 디테일 페이지를 볼 수 있다
//6. 상품 디테일 페이지 에서 로그아웃 버튼을 클릭하면 로그아웃이 된다
//7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다 다시 로그인 페이지를 보여준다
//8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다
//9. 상품을 검색할 수 있다

 function Main() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log("인증상태", authenticate);
  }, [authenticate]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "products", element: <ProductAll /> },
        { path: "products/:id", element: <PrivateRoute authenticate={authenticate} /> },
        {
          path: "login",
          element: <LoginPage setAuthenticate={setAuthenticate} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(<Main />);