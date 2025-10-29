import { Container, Form, Button } from "react-bootstrap";
import { useNavigate} from "react-router-dom";


export default function LoginPage({setAuthenticate}) {

    const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    console.log("나 로그인 유저임");
    setAuthenticate(true);
    navigate("/");
  }
  return (
    <Container className=" d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="w-100" style={{ maxWidth: "380px" }}>
        <h1 className="fw-bold fs-3 mb-5 text-center">29CM</h1>

        <Form onSubmit={loginUser}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="small text-muted">이메일</Form.Label>
            <Form.Control
              type="email"
              placeholder="you@example.com"
              className="login-input"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="small text-muted">비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              className="login-input"
            />
          </Form.Group>


          <Button variant="dark" type="submit" className="w-100 py-2 login-btn">
            로그인
          </Button>

          <div className="text-center mt-4">
            <span className="text-muted small">아직 회원이 아니신가요? </span>
            <a href="#" className="login-link small text-decoration-none">
              회원가입
            </a>
          </div>
        </Form>
      </div>
    </Container>
  );
}
