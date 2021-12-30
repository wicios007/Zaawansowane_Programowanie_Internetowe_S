import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useState } from "react";
import Zad14s from "./zad14s";
import classess from "./zad14.module.css";

function Zad14() {
  const [idx, setIdx] = useState(0);
  const [active, setActive] = useState(false);
  const [classes, setClasses] = useState("");
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(false);

  const [gallery, setGallery] = useState([
    {
      id: 1,
      src: "https://appliancecareofatlanta.com/wp-content/uploads/2021/01/176-1766224_instagram-logos-in-vector-format-free-download-instagram-logo-small-size.jpg",
      name: "instagram",
    },
    {
      id: 2,
      src: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bw_copy_icon_320x320.png",
      name: "squares",
    },
    {
      id: 3,
      src: "https://stachura.opole.pl/images/oferta_05-320x320.jpg",
      name: "tower",
    },
    {
      id: 4,
      src: "https://www.airfrance.com/FR/common/common/img/tbaf/destinations/PPT/PPT-1_1-320x320.jpg",
      name: "lake",
    },
  ]);
  return (
    <Card>
      <CardHeader>
        <h2> Gallery of images </h2>
      </CardHeader>
      <Row>
        <Col>
          {gallery.map((img, index) => {
            return (
              <CardGroup key={img.id}>
                <ul>
                  <li
                    className={classes}
                    onClick={() => {
                      setIdx(index);
                      setActive(true);
                      setClasses(classess.borderx);
                    }}
                  >
                    {index + 1}.<img src="" alt={img.name}></img>
                  </li>
                </ul>
              </CardGroup>
            );
          })}
        </Col>
        <Col className="mt-3">
          <Button
            className="m-1"
            onClick={() => {
              if (idx < 0) setDisabledPrev(true);
              setIdx((state) => state - 1);
              setDisabledNext(false);
            }}
          >
            Prev
          </Button>
          {active && <Zad14s gallery={gallery} index={idx} />}
          <Button
            className="m-1"
            onClick={() => {
              if (idx >= gallery.length - 2) setDisabledNext(true);
              setIdx((state) => state + 1);
              setDisabledPrev(false);
            }}
            disabled={disabledNext}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default Zad14;
