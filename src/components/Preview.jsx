import "react";
import PropTypes from "prop-types";

const Preview = ({name, email, region, paymentType, legalTerms }) => {
  return (
    <div className="preview">
      <h2>Tus datos son:</h2>
      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Región: {region}</li>
        <li>Método de pago: {paymentType}</li>
        <li>Has aceptado nuestros términos legales: {legalTerms}</li>
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
