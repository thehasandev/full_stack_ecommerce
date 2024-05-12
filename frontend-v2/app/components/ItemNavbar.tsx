"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Link from "next/link";
const _links = [
  {
    name: "Desktop",
    href: "desktop",
  },
  {
    name: "Laptop",
    href: "laptop",
  },
  {
    name: "Component",
    href: "component",
  },
  {
    name: "Monitor",
    href: "monitor",
  },
  {
    name: "UPS",
    href: "uPS",
  },
  {
    name: "Phone",
    href: "phone",
  },
  {
    name: "Tablet",
    href: "tablet",
  },
  {
    name: "Office Equipment",
    href: "office Equipment",
  },
  {
    name: "Security",
    href: "security",
  },
  {
    name: "Networking",
    href: "networking",
  },
];

export default function DesktopNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {_links.map((item, index) => (
              <Nav.Link className="text-secondary hover-danger" href={item.href} key={index}>{item.name}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
