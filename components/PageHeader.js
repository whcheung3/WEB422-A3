import Card from "react-bootstrap/Card";

export default function PageHeader(props) {
  return (
    <>
      <Card className="bg-light">
        <Card.Body>
          <strong>{props.text}</strong>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}
