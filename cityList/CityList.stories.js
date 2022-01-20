import React from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf('StoreLocator/CityList', module).add('Default', () => (
  <CityList onLinkClicked="/" cityListData={cityData} />
));
