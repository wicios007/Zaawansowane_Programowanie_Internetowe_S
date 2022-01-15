import React from "react";
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { List, ListItem } from "@mui/material";

interface Photo {
    id: number
    name: string
    url: string
    description: string
}

type State = {
    selectedItem : number
    
}

export class Zad6 extends React.Component<{}, State> {

    photos : Photo[]

    constructor(props: {}) {
        super(props);

        this.photos =  [
            { id: 1, name: "Motocross", url: "https://cdn.pixabay.com/photo/2017/04/26/10/54/motocross-2262325_960_720.jpg", description: "Motocross w błocie" },
            { id: 2, name: "Nakrętki", url: "https://cdn.pixabay.com/photo/2013/07/18/20/27/nut-165083_960_720.jpg", description: "Dużo nakrętek na raz" },
            { id: 3, name: "Gumki recepturki", url: "https://cdn.pixabay.com/photo/2014/10/25/20/27/rubber-bands-503028_960_720.jpg", description: "Bałagan" },
            { id: 4, name: "Wąż", url: "https://cdn.pixabay.com/photo/2017/09/07/23/55/nature-2727199_960_720.jpg", description: "Wąż rzeczny bardzo niebezpieczny" },
            { id: 5, name: "Ciekły metal", url: "https://cdn.pixabay.com/photo/2017/09/13/21/29/drain-2747070_960_720.jpg", description: "Minecraft w prawdziwym życiu" },
        ]

        this.state = {
            selectedItem : 1
        }
    }
    /*
    fajny sposób implementacji karuzeli

    <Carousel fade>
    {
        this.state.photos.map(c => {
            return (
                <Carousel.Item>
                    <img src={c.url} alt={c.description} />
                    <Carousel.Caption>
                        <h3>{c.name}</h3>
                        <p>{c.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        })
    }
</Carousel>
    */
   prevPhoto = () => {
       if(this.state.selectedItem > 1){
        const newState = {
            selectedItem : this.state.selectedItem - 1
        }
        this.setState(newState)
        console.log(this.state.selectedItem)
       }
       else
          return
       
   }

   nextPhoto = () => {
    if(this.state.selectedItem > this.photos.length - 1){
        return
    }
        const newState = {
            selectedItem : this.state.selectedItem + 1
        }
        this.setState(newState)
        console.log(this.state.selectedItem)
   }

    render() {
        return (
            <>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card>
                            <Card.Header>
                                <p>Zdjęcia</p>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                    { this.state.selectedItem > 1 &&
                                        <Button onClick={this.prevPhoto}>prev</Button>
                                    }
                                        
                                    </Col>
                                    <Col>
                                        <List>
                                        {
                                            this.photos.map(c => {
                                                return (
                                                    this.state.selectedItem === c.id && <ListItem key={c.id}><img src={c.url} alt={c.name}/></ListItem>
                                                )
                                            })
                                        }
                                        </List>
                                    </Col>
                                    <Col>
                                    {this.state.selectedItem < this.photos.length &&
                                        <Button onClick={this.nextPhoto}>next</Button>
                                    }
                                        
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col></Col>
                </Row>
            </>
        )
    }

}

