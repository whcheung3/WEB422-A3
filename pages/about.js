import Link from "next/link";
import Card from "react-bootstrap/Card";
import MovieDetails from "../components/MovieDetails";
import PageHeader from "../components/PageHeader";

export function getStaticProps() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://puzzled-clam-shift.cyclic.app/api/movies/573a139af29313caabcf0859"
    )
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: { movie: data } });
      });
  });
}

export default function About(props) {
  return (
    <>
      <PageHeader text="About the Developer : Wing Ho Cheung" />
      <Card>
        <Card.Body>
          <p>
            Hi! This is Wing Ho Cheung. I am studying the last semester of CPP
            at Seneca.
          </p>
          <p>
            My favourite movie is{" "}
            <Link href="/movies/Dark City">Dark City</Link>.
          </p>
        </Card.Body>
        <MovieDetails movie={props.movie} />
      </Card>
    </>
  );
}
