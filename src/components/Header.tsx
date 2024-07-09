import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link href={`/`}>
          <div className="nav-link">
            <img
              src="/logo.png"
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </div>
        </Link>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-expanded="false"
        >
          훈돌라
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              마이페이지
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item ms-auto">
        <a className="nav-link" href="#">
          <p className="text-[#10AF86]">로그인</p>
        </a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">
          <p className="text-[#2e2e2e]"> 회원가입 </p>
        </a>
      </li>
    </ul>
  );
};

export default Header;
