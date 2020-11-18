import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const TitleComponent = styled.h2`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: 0;
  text-decoration: ${(props) => props.textDecoration};
  text-align: ${(props) => props.textAlign};
`;

const TypographyComponent = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
`;

export const Title =  ({ text, color,textAlign, fontSize, fontWeight, children, textDecoration}) => (
  <TitleComponent textAlign={textAlign} fontSize={fontSize} fontWeight={fontWeight} color={color} textDecoration={textDecoration}>
    {text || children}
  </TitleComponent>
);

Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  children: PropTypes.node,
};

Title.defaultProps = {
  text: '',
  color: '#00343d',
  fontSize: '1rem',
  fontWeight: 500,
  children: '',
};

export const Typography = ({
  text,
  color,
  fontSize,
  fontWeight,
  textAlign,
  margin,
  children,
}) => (
  <TypographyComponent
    fontSize={fontSize}
    fontWeight={fontWeight}
    color={color}
    textAlign={textAlign}
    margin={margin}
  >
    {text || children}
  </TypographyComponent>
);

Typography.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.number,
  textAlign: PropTypes.string,
  margin: PropTypes.string,
  children: PropTypes.node,
};

Typography.defaultProps = {
  text: '',
  color: '#00343d',
  fontSize: '1rem',
  fontWeight: 500,
  textAlign: 'left',
  margin: '0',
  children: '',
};
