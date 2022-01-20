import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import CityList from './CityList';

const cityData = [
  { uid: 'AL', cityName: 'Alabama' },
  { uid: 'AK', cityName: 'Alaska' },
  { uid: 'CA', cityName: 'California' },
  { uid: 'CO', cityName: 'Colorado' },
  { uid: 'CT', cityName: 'Connecticut' },
  { uid: 'DE', cityName: 'Delaware' },
  { uid: 'FL', cityName: 'Florida' },
  { uid: 'GA', cityName: 'Georgia' },
  { uid: 'HI', cityName: 'Hawaii' },
  { uid: 'ID', cityName: 'Idaho' },
  { uid: 'IA', cityName: 'Iowa' },
  { uid: 'IL', cityName: 'Illinois' },
  { uid: 'IN', cityName: 'Indiana' },
  { uid: 'KS', cityName: 'Kansas' },
  { uid: 'KY', cityName: 'Kentukey' },
  { uid: 'ME', cityName: 'Maine' },
  { uid: 'TX', cityName: 'Texas' },
];

test('city list', () => {
  const onLinkClicked = jest.fn();
  render(<CityList cityListData={cityData} onLinkClicked={onLinkClicked} />);

  // Click button

  fireEvent.click(screen.getByText('Alabama'));

  expect(onLinkClicked).toHaveBeenCalledTimes(1);

  expect(onLinkClicked).toHaveBeenCalledWith(cityData[0]);

  fireEvent.click(screen.getByText('Indiana'));

  expect(onLinkClicked).toHaveBeenCalledTimes(2);

  expect(onLinkClicked).toHaveBeenCalledWith(cityData[12]);
});

test('city list when "onLinkClicked" not passed', () => {
  render(<CityList cityListData={cityData} />);

  // Click button
  fireEvent.click(screen.getByText('Alabama'));

  expect(screen.getByText('Alabama')).toBeTruthy();
});
