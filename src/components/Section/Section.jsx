import PropTypes from 'prop-types';

import { StatisticsBox } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <StatisticsBox>
      <h2>{title}</h2>
      {children}
    </StatisticsBox>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
