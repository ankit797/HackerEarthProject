import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';



const Details=(props)=> {

    const [data, setData] = useState([]);

    useEffect(()=>{
        console.log(props.match.params.id);
        const DetailPage =  async () =>{
            setData(props.location.state);
        };
        DetailPage();
    },[props]);

  return (
    <div className='Details'>
         <Card>
            <Card.Img src={data.image} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Name:- {data.name}</Card.Title>
                <Card.Text>
                Description:- {data.description}
                </Card.Text>
                
            </Card.ImgOverlay>
        </Card>

    </div>
  );
}

export default Details;
