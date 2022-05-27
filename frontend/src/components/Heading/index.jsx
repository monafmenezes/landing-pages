import { Title } from './styles';
import P from 'prop-types';

const Heading = ({ children }) => {
  return (
    <div>
      <Title>{children}</Title>
    </div>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
};

export default Heading;
