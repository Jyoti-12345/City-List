import styled from 'react-emotion';
import theme from '../../common/theme/storeLocator';
import { pxToRem } from '../../utils/sizeConversion';

export const CityListContainer = styled('div')`
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    max-width: 300px;
    // max-height: 400px;
    // overflow-y: auto;

    li:nth-last-child(1) {
      border-bottom: 0;
    }
  }
`;

export const ListItem = styled('li')`
  padding: ${pxToRem(16)} 0 ${pxToRem(16)} 0;
  border-bottom: ${pxToRem(1)} solid ${theme.colors.gray.light};
`;

export const Link = styled('a')`
  font: ${theme.fonts.secondary.xxLarge.bold};
  color: ${theme.colors.primary.dark};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: ${theme.colors.primary.dark};
  }
`;

export const StateHeading = styled('h3')`
  font: ${theme.fonts.secondary.xxLarge.veryBold};
  color: ${theme.colors.primary.dark};
  margin-bottom: ${pxToRem(8)};
`;
