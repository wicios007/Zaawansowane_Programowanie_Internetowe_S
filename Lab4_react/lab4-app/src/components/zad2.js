import { useState } from "react";
import {
  Button,
  ListGroup,
  Card,
  Form,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Zad12 from "./zad12";
import Zad13 from "./zad13";

function Zad2() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [desc, setDesc] = useState("");
  const [nameValid, setNameValid] = useState("");
  const [urlValid, setUrlValid] = useState("");
  const [descValid, setDescValid] = useState("");
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [content, setContent] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [links, setLinks] = useState([
    {
      id: 1,
      name: "Pcz",
      url: "https://www.pcz.pl",
      description: "Polish academy of science",
    },
    {
      id: 2,
      name: "Wimii",
      url: "https://www.wimii.pcz.pl",
      description: "Department of pcz",
    },
    {
      id: 3,
      name: "google",
      url: "https://www.google.com",
      description: "Google helps us every day",
    },
  ]);

  const validate = () => {
    let nameErr = "";
    let urlErr = "";
    let descErr = "";
    if (!name) {
      nameErr = "name cannot be blank";
    }
    if (!url) {
      urlErr = "url cannot be blank";
    }
    if (!desc) {
      descErr = "desc cannot be blank";
    }
    if (nameErr || urlErr || descErr) {
      setNameValid(nameErr);
      setUrlValid(urlErr);
      setDescValid(descErr);
      return false;
    }
    return true;
  };
  const addLink = (e) => {
    e.preventDefault();
    let isValid = validate();
    if (isValid) {
      setLinks([
        ...links,
        {
          id: links.length + 1,
          name: name,
          url: url,
          description: desc,
        },
      ]);
      setName("");
      setUrl("");
      setDesc("");
      setNameValid("");
      setUrlValid("");
      setDescValid("");
    } else {
      return null;
    }
  };

  return (
    <>
      <Form onSubmit={addLink}>
        <FormGroup>
          <header>
            <h5>Website name</h5>
          </header>
          <FormControl
            name="name"
            placeholder="website name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <div style={{ color: "red", fontSize: 18 }}>{nameValid}</div>
        </FormGroup>
        <FormGroup>
          <header>
            <h5>Url</h5>
          </header>
          <FormControl
            name="url"
            placeholder="Url"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
          <div style={{ color: "red", fontSize: 18 }}>{urlValid}</div>
        </FormGroup>
        <FormGroup>
          <header>
            <h5>Description</h5>
          </header>
          <textarea
            name="name"
            placeholder="description"
            value={desc}
            onChange={(event) => setDesc(event.target.value)}
          ></textarea>
          <div style={{ color: "red", fontSize: 18 }}>{descValid}</div>
        </FormGroup>
        <Button type="submit" disabled={!name || !url || !desc}>
          Save
        </Button>
        <Button
          className="m-1"
          onClick={() => {
            setName("");
            setUrl("");
            setDesc("");
            setNameValid("");
            setUrlValid("");
            setDescValid("");
          }}
        >
          Anuluj
        </Button>
      </Form>
      <ListGroup className="mt-2">
        {links.map((l, index) => (
          <ul key={l.id}>
            <li
              key={l.id}
              onClick={() => {
                setShowSecond(true);
                setContent(l.description);
                setSelectedIndex(index);
              }}
            >
              <Button onClick={() => setShowThird(true)}>Delete</Button>

              <h4>
                {index + 1}. <a href={l.url}>{l.name}</a>
              </h4>
            </li>
          </ul>
        ))}
        <div>{showSecond && <Zad12 content={content} />}</div>
        <Card>
          <CardHeader>
            {showThird && (
              <Zad13
                active={setShowThird}
                setlinks={setLinks}
                idx={selectedIndex}
              />
            )}
          </CardHeader>
        </Card>
      </ListGroup>
    </>
  );
}
export default Zad2;
