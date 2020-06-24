import React from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';
import './Subscription.scss';

const Subscription = (props) => {
  let rightElem = null;
  const { broadcasting, newVideoAmount } = props;

  if (broadcasting) {
    rightElem = <Icon name="signal" />;
  } else if (newVideoAmount) {
    rightElem = <span className="new-videos-count">{newVideoAmount}</span>;
  }

  return (
    <Menu.Item>
      <div className="subscription">
        <div>
          <Image src="http://via.placeholder.com/28x28" avatar />
          <span>{props.label}</span>
        </div>

        {rightElem}
      </div>

    </Menu.Item>
  );
};

export default Subscription;
