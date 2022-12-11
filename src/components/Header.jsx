import React from "react";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/636/638/small/medical-symbol-3d-illustration-icon-png.png"
            alt="medical icon"
            width="40px"
            height="40px"
          />
          <a className="navbar-brand" href="#">
            Medical Darphan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              Products
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              Distributors
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              Manufacturers
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              About Us
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              Blog
            </a>
            <a className="nav-link active User1" aria-current="page" href="#">
              Login
            </a>
            <img
              src="https://www.freeiconspng.com/thumbs/account-icon/account-profile-icon-1.png"
              className="User2"
              alt="Account image"
              width="40px"
              height="40px"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
