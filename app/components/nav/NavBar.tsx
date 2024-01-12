import Link from "next/link";
import Container from "../container";

const NavBar = () => {
  return (
    <div
      className="
  sticky
  top-0
  bg-slate-200
  z-30
  shadow-sm"
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div>
            <Link href="/">Spirit Haven</Link>
            <div>Search</div>
            <div>
                <div>Cart</div>
                <div>UserMenue</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
