import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Forms=()=> {

    const [name,setName]= useState();
    const [image, setImage] = useState();
    const [description,setDescription] = useState();



    const SubmitForm = async () => {
        
        console.log(name);
    };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicUrl">
        <Form.Label>Image Link</Form.Label>
        <Form.Control type="text" placeholder="Enter Image URL" onChange={(event) => setImage(event.target.value)} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Image Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Image Name" onChange={(event) => setName(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Image Details" onChange={(event) => setDescription(event.target.value)}/>
      </Form.Group>

      <Button variant="primary" onClick={SubmitForm}>
        Submit
      </Button>
    </Form>
  );
}

export default Forms;
