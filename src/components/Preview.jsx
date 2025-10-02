import "react";
import PropTypes from "prop-types";

const Preview = (props) => {
  return (
    <div className="preview">
      <h2>Tus datos son:</h2>
      <ul>
        <li>Name: {props.name}</li>
        <li>Email: {props.email}</li>
        <li>Región: {props.region}</li>
        <li>Método de pago: {props.paymentType}</li>
        <li>Has aceptado nuestros términos legales: {props.legalTerms}</li>
      </ul>
    </div>
  );
};

export default Preview;

Preview.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  paymentType: PropTypes.string.isRequired,
  legalTerms: PropTypes.string.isRequired,
};
