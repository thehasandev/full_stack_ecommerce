import Link from "next/link";
import Container from "./components/Container";

export default function NotFound() {
  return (
    <Container className="my-16">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Container>
  );
}
