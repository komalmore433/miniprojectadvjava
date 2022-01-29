import react from "react";
import { Fragment } from "react/cjs/react.production.min";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddCourse = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center my-3">Fill Train Details</h1>
      <Form>
        <FormGroup>
          <label for="userId">Train No</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Train Name</label>
          <Input type="text" placeholder="Enter title here" id="title" />
        </FormGroup>
        <Container className="text-center">
          <Button color="success">Add Train</Button>
        </Container>
      </Form>
    </div>
  );
};

export default AddCourse;
