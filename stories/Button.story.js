import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button';

const data = {};

storiesOf('Button', module).add('with data', () => <Button data={data} />);
