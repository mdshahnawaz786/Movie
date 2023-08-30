import React from "react";
import {MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon, MDBBtn,} from "mdb-react-ui-kit";

const MyFooter = () => {
  return (
    <div>
      <MDBFooter className="bg-dark text-center text-white">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.facebook.com/md.shahnawaz.940"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://mail.google.com/mail/u/0/#inbox"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://instagram.com/md_shahnawaz786"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://linkedin.com/in/shahnawaz0786"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://github.com/mdshahnawaz786"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © Movie Search App 2023 | Copyright:
          <a className="text-white" href="https://www.themoviedb.org/">
            {" "}
            www.themoviedb.org{" "}
          </a>
          &nbsp;&nbsp;| Developed by Md Shahnawaz...
        </div>
      </MDBFooter>
    </div>
  );
};

export default MyFooter;
