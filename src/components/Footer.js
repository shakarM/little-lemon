import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

import "./Footer.css";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="text-center flex  justify-center ">
      <MDBFooter
        className="text-center justify-center items-center w-screen sm:w-[50rem]"
        color="dark"
        bgColor="white"
      >
        <MDBContainer className="p-4 gap-6">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>

          <section className="">
            <form action="">
              <h1 className="font-bold text-[1.4rem]">
                Subscribe out Little Lemon
              </h1>
              <input
                type="email"
                placeholder="Email"
                className="w-[15rem] m-3 h-[2rem] p-4 rounded border border-none outline-none"
              />
              <Button> Subscribe</Button>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section className="">
            <MDBRow className="flex justify-between sm:flex sm:justify-around m-[5rem]">
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase font-bold text-[1.3rem]">
                  Links
                </h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="menu" className="text-stone-800">
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link to="reservation" className="text-stone-800">
                      Reservation
                    </Link>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase font-bold text-[1.3rem]">
                  Foods
                </h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="menu/pasta" className="text-stone-800">
                      Pasta
                    </Link>
                  </li>
                  <li>
                    <Link to="menu/pizza" className="text-stone-800">
                      Pizza
                    </Link>
                  </li>
                  <li>
                    <Link to="menu/kabab" className="text-stone-800">
                      Kebab
                    </Link>
                  </li>
                  <li>
                    <Link to="menu/chicken" className="text-stone-800">
                      Chicken
                    </Link>
                  </li>
                  <li>
                    <Link to="menu/burger" className="text-stone-800">
                      Burger
                    </Link>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>

        <div className="text-center p-3">
          © 2020 Copyright:
          <Link className="text-stone-800" href="https://mdbootstrap.com/">
            Shakar Lateef Muhammed
          </Link>
        </div>
      </MDBFooter>
    </footer>
  );
}
