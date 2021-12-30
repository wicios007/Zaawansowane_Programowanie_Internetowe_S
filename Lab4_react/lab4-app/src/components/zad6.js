import { Card, Table, Row, Col, Button, Container } from "react-bootstrap";
import { useState } from "react";

function Zad6() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  const [imageList, setImageList] = useState([
    {
      id: 1,
      name: "instagram",
      url: "https://appliancecareofatlanta.com/wp-content/uploads/2021/01/176-1766224_instagram-logos-in-vector-format-free-download-instagram-logo-small-size.jpg",
    },
    {
      id: 2,
      name: "squares",
      url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bw_copy_icon_320x320.png",
    },
    {
      id: 3,
      name: "tower",
      url: "https://stachura.opole.pl/images/oferta_05-320x320.jpg",
    },
    {
      id: 4,
      name: "lake",
      url: "https://www.airfrance.com/FR/common/common/img/tbaf/destinations/PPT/PPT-1_1-320x320.jpg",
    },
  ]);

  function onNext() {
    setCurrentIndex((index) => index + 1);
    setDisabledPrev(false);
    if (currentIndex === imageList.length - 1) return setDisabledNext(true);
  }
  function onPrev() {
    setCurrentIndex((index) => index - 1);
    setDisabledNext(false);
    if (currentIndex === 2) return setDisabledPrev(true);
  }
  return (
    <Container>
      <Card>
        <Row>
          <Table>
            <tr>
              <td>
                <Row>
                  <Col xs={3}>
                    <Button
                      className="btn btn-primary"
                      onClick={onPrev}
                      disabled={disabledPrev}
                    >
                      Prev
                    </Button>
                  </Col>
                  <Col xs={6}>
                    {imageList.map((link, index) => {
                      return (
                        currentIndex === link.id && (
                          <li key={link.id}>
                            <img
                              style={{ width: "200px", height: "200px" }}
                              src={link.url}
                              alt={link.name}
                            ></img>
                          </li>
                        )
                      );
                    })}
                  </Col>
                  <Col xs={3}>
                    <Button
                      className="btn btn-primary"
                      onClick={onNext}
                      disabled={disabledNext}
                    >
                      Next
                    </Button>
                  </Col>
                </Row>
              </td>
            </tr>
          </Table>
        </Row>
      </Card>
    </Container>
  );
}
export default Zad6;
