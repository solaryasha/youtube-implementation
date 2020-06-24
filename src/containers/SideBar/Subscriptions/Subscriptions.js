import React, { Fragment } from 'react';
import { Divider } from 'semantic-ui-react';
import SideBarHeader from '../SideBarHeader/SideBarHeader';
import Subscription from './Subscription/Subscription';

const Subscriptions = props => (
  <Fragment>
    <SideBarHeader title="subscriptions" />
    <Subscription label="MusicChannel" broadcasting />
    <Subscription label="Coursea" newVideoAmount="10" />
    <Subscription label="TEDx Talks" newVideoAmount="23" />
    <Subscription label="Stanford iOS" newVideoAmount="4" />
    <Subscription label="Udacity" newVideoAmount="114" />
    <Divider />
  </Fragment>
);

export default Subscriptions;
