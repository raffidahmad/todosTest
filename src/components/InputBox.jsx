import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
function InputBox(props) {
    const [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.onAdd(input);
        setInput("");
    }


    return (
        <Form onSubmit={handleSubmit} className='d-flex gap-5 '>
            <Form.Group className="mb-3">
               
                <Form.Control
                    type="text"
                    placeholder="Item"
                    value={input}
                    onChange={handleChange}
                    required
                />

            </Form.Group>
            <Button variant="primary" type="submit" className='align-self-center mb-4'>
                Submit
            </Button>
        </Form>
    );
}

export default InputBox;