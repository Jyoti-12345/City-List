import React from 'react';
import PropTypes from 'prop-types';
import { CityListContainer, ListItem, Link, StateHeading } from './CityList.styles';

const CityList = ({ cityListData, onLinkClicked, stateName }) => {
  const onClickHandler = (event, item) => {
    if (onLinkClicked) {
      event.preventDefault();
      onLinkClicked(item);
    }
  };

  return (
    <>
      <StateHeading>{stateName}</StateHeading>
      <CityListContainer>
        <ul>
          {cityListData.map(item => {
            const { cityName, url, uid } = item;
            return (
              <ListItem key={uid}>
                <Link
                  data-auid={cityName}
                  href={url || '#'}
                  aria-label={cityName}
                  onClick={event => onClickHandler(event, item)}
                >
                  {cityName}
                </Link>
              </ListItem>
            );
          })}
        </ul>
      </CityListContainer>
    </>
  );
};

CityList.propTypes = {
  onLinkClicked: PropTypes.func,
  cityListData: PropTypes.arrayOf(
    PropTypes.shape({
      cityName: PropTypes.string,
      url: PropTypes.string,
      uid: PropTypes.string,
    })
  ),
  stateName: PropTypes.string,
};

CityList.defaultProps = {
  onLinkClicked: null,
  cityListData: [],
  stateName: 'Kansas',
};
export default CityList;
