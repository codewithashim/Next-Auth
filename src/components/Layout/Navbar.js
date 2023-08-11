import { Layout, Menu, Button } from "antd";
import { useSession, signOut } from "next-auth/react"
const { Header } = Layout;
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession()

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="demo-logo">
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
          }}
        >
          NEXT AUTH
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          width: "20%",
          display: "flex",
          fontSize: "20px",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{ textDecoration: "none", color: "white" }}
          href="/profile"
        >
          <items>Profile</items>
        </Link>
        {
          session?.user ? <items>
            <Button type="primary" danger
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </items>
            : <Link style={{ textDecoration: "none", color: "white" }} href="/login">
              <items>Login</items>
            </Link>
        }
      </Menu>
    </Header>
  );
};
export default Navbar;
