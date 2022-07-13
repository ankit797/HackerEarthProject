import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';



const Home=()=> {
    let array = [
        {
            image:"https://dummyimage.com/600x400",
            name:"ak",
            description:`This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.`,
        },
        {
            image:"https://dummyimage.com/600x400",
            name:"Card title",
            description:`This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.`,
        },
        {
            image:"https://dummyimage.com/600x400",
            name:"Card title",
            description:`This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.`,
        },
        {
            image:"https://dummyimage.com/600x400",
            name:"ak",
            description:`This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.`,
        },
        {
            image:"https://dummyimage.com/600x400",
            name:"Card title",
            description:`This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.`,
        },
        {
            image:"https://dummyimage.com/600x400",
            name:"Card title",
            description:`This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.`,
        },
        {
            image:"https://dummyimage.com/600x400",
            name:"ak",
            description:`This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.`,
        },
        {
            image:"https://dummyimage.com/600x400",
            name:"Card title",
            description:`This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.`,
        },
        {
            image:"https://dummyimage.com/600x400",
            name:"Card title",
            description:`This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.`,
        },
        {
            image:"https://dummyimage.com/600x400",
            name:"ak",
            description:`This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.`,
        },
        {
            image:"https://dummyimage.com/600x400",
            name:"Card title",
            description:`This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.`,
        },
        {
            image:"https://dummyimage.com/600x400",
            name:"Card title",
            description:`This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.`,
        }
    ];
    


  return (
    <div className='Home'>
         <Row xs={1} md={3} className="g-4">
            {array.map((element, idx) => (
                
                <Col key={idx}>
                <Card>
                    
                      <NavLink  to={{
                        pathname:`/show/${idx}`,
                        state:{
                          name:element.name,
                          description:element.description,
                          image: element.image,
                        }
                        }}>
                        <Card.Img variant="top" src={element.image} />
                      </NavLink>
                      
                    
                    <Card.Body>
                    <Card.Title>{idx}</Card.Title>
                    <Card.Text>
                        {element.description}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>

    </div>
  );
}

export default Home;
