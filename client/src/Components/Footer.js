import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter  className="font-small pt-4 mt-4 footer">
      <MDBContainer  className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="7">
            <h5 className="title">Site Title</h5>
            <p>
             This is proudly made by some people studying in PAF-KIET to enable student find best opportunites for their career
            </p>
          </MDBCol>
          <MDBCol md="2"></MDBCol>
          <MDBCol md="2">
            <h5 className="title">Useful Links</h5>
            <ul>
              <li className="list-unstyled">
               <Link to="/home">Home</Link>
              </li>
              <li className="list-unstyled">
              <Link to="/compare">Comparision</Link>
              </li>
              <li className="list-unstyled">
              <Link to="/review">Review</Link>
              </li>
              <li className="list-unstyled">
              <Link to="/scholarship">Scholarship</Link>
              </li>
          

            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; Site Title
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;