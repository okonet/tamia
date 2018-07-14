import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeGet from '../styles/themeGet';

const Link = styled.a`
	&,
	&:link,
	&:visited {
		color: ${themeGet('colors.primary')};
	}
	&:hover,
	&:active,
	&:focus {
		color: ${themeGet('colors.hover')};
	}
`;

Link.propTypes = {
	children: PropTypes.node,
};

export default Link;
