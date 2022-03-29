import React from 'react';
// import { Form, Button, Input, Icon } from "semantic-ui-react";
import { Navbar, Container } from 'react-bootstrap';
import { Form, Button, Input, Icon } from 'semantic-ui-react';
import LaunchnodesLogo from '../images/LaunchnodesLogo.png';
import '../App.css';

function NavBar(props) {
  const showDetails = props.showDetails;
  return (
    <div>
      <Navbar style={{ background: '#E5EFFF' }}>
        <Container>
          <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }}>
            <img
              alt=""
              src={LaunchnodesLogo}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
            <h1 style={{ marginBottom: '20px', color: '#2c2c2c' }}>Launchnodes</h1>
          </Navbar.Brand>
          <Form
            className="col-lg-12 inputForm"
            style={{ display: 'flex', alignItems: 'center' }}
            onSubmit={props.handleSubmit}
          >
            <Input
              className="col-lg-8"
              type="text"
              placeholder="Enter Public Key / Index Number"
              value={props.pubKey}
              onChange={(e) => props.setpubKey(e.target.value)}
            />
            <Button type="submit" style={{ backgroundColor: 'transparent' }}>
              <Icon
                style={{ paddingLeft: '10px', paddingBottom: '30px' }}
                name="search"
                size="big"
              />
            </Button>
          </Form>
        </Container>
     
        
      </Navbar>
      
    </div>
  );
}

export default NavBar;
