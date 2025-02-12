import styled from '@emotion/styled';
import themeGet from '../util/themeGet';

// Inspired by Bootstrap and Typography.js

const TextContent = styled('div')`
	& h1,
	& h2,
	& h3,
	& h4,
	& h5,
	& h6,
	& hgroup,
	& ul,
	& ol,
	& dl,
	& dd,
	& p,
	& pre,
	& table,
	& blockquote,
	& form,
	& iframe,
	& img,
	& hr,
	& address {
		margin-bottom: ${themeGet('blockMarginBottom')};
	}

	& h1,
	& h2,
	& h3,
	& h4,
	& h5,
	& h6,
	& ul,
	& ol,
	& p,
	& blockquote {
		max-width: ${themeGet('page.textMaxWidth')};
	}

	/* Links */
	& a,
	& a:link,
	& a:visited {
		color: ${themeGet('colors.primary')};
	}
	& a:hover,
	& a:active,
	& a:focus {
		color: ${themeGet('colors.hover')};
	}
	& a:focus {
		outline: 1px dotted ${themeGet('colors.hover')};
		outline-offset: 1px;
	}

	/* Blockquotes */
	& blockquote {
		margin-left: ${themeGet('space.l')};
		margin-right: ${themeGet('space.l')};
		font-size: ${themeGet('fontSizes.s')};
	}
	& blockquote p {
		margin-bottom: calc(${themeGet('blockMarginBottom')} / 2);
	}
	& cite {
		font-style: italic;
	}
	& hr {
		border: 0;
		background: ${themeGet('colors.border')};
	}

	/* Responsive images and full bleed images */
	& p > img,
	& p > a > img,
	& figure > img,
	& figure > a > img {
		height: auto;
		max-width: calc(100% + ${themeGet('page.xPadding')} * 2);
		margin-left: -${themeGet('page.xPadding')};
		margin-right: -${themeGet('page.xPadding')};
		margin-top: calc(${themeGet('blockMarginBottom')} / 2);
		@media (min-width: ${props =>
				props.theme.page.contentMaxWidth || props.theme.page.maxWidth}) {
			max-width: 100%;
			margin-left: auto;
			margin-right: auto;
		}
	}

	/* Tables */
	& table {
		font-size: ${themeGet('fontSizes.s')};
		border-collapse: collapse;
		width: 100%;
	}
	& thead {
		text-align: left;
		border-bottom: 2px solid ${themeGet('colors.border')};
	}
	& td,
	& th {
		text-align: left;
		border-bottom: 1px solid ${themeGet('colors.border')};
		padding: calc(${themeGet('blockMarginBottom')} / 2);
	}
	& th:first-of-type,
	& td:first-of-type {
		padding-left: 0;
	}
	& th:last-child,
	& td:last-child {
		padding-right: 0;
	}
	& tbody tr:last-child td {
		border: 0;
	}

	/* Headings */
	/* Collapse margin between headings and before first heading */
	& h1,
	& h2,
	& h3,
	& h4,
	& h5,
	& h6 {
		margin-top: ${themeGet('headingMarginTop')};
		font-family: ${themeGet('fonts.heading')};
		line-height: ${themeGet('lineHeights.heading')};
		font-weight: ${themeGet('fontWeights.heading')};
	}

	& h1 + h2,
	& h2 + h3,
	& h3 + h4,
	& h4 + h5,
	& h5 + h6,
	& h1:first-child,
	& h2:first-child,
	& h3:first-child,
	& h4:first-child,
	& h5:first-child,
	& h6:first-child {
		margin-top: 0;
	}
	& h1 {
		font-size: ${themeGet('fontSizes.xxl')};
	}
	& h2 {
		font-size: ${themeGet('fontSizes.xl')};
	}
	& h3 {
		font-size: ${themeGet('fontSizes.l')};
	}
	& h4 {
		line-height: ${themeGet('lineHeights.base')};
		font-size: ${themeGet('fontSizes.m')};
		font-weight: bold;
	}
	& h5 {
		line-height: ${themeGet('lineHeights.base')};
		font-size: ${themeGet('fontSizes.m')};
		font-style: italic;
	}
	& h6 {
		line-height: ${themeGet('lineHeights.base')};
		font-size: ${themeGet('fontSizes.m')};
	}

	/* Unordered list with dashes (—) as bullets and basic ordered list */
	& ol {
		padding-left: ${themeGet('listMargin')};
	}
	& li {
		margin-bottom: calc(${themeGet('blockMarginBottom')} / 2);
	}
	& li > ul,
	& li > ol {
		margin-bottom: 0;
	}
	& ul > ul,
	& ul > ol {
		margin-left: ${themeGet('listMargin')};
	}
	& ul > li {
		position: relative;
		padding-left: ${themeGet('listMargin')};
		margin-left: 0;
	}
	& ul > li::before {
		content: '\\2014\\a0';
		position: absolute;
		left: 0;
	}
	/* Hanging markers on big screens */
	@media (min-width: ${themeGet('page.maxWidth')}) {
		& ol {
			padding-left: 0;
		}
		& ul > li {
			margin-left: -${themeGet('listMargin')};
		}
	}

	/* Code */
	& code,
	& kbd {
		font-family: ${themeGet('fonts.code')};
	}
	& pre {
		display: block;
		line-height: ${themeGet('lineHeights.pre')};
		font-size: ${themeGet('fontSizes.s')};
		font-family: ${themeGet('fonts.pre')};
		white-space: pre-wrap;
		tab-size: 4;
		text-size-adjust: none;
	}
	& pre code {
		display: block;
		font-size: inherit;
		color: inherit;
	}
`;

/** @component */
export default TextContent;
