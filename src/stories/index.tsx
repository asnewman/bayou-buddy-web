import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../components/Button';

import '../index.css';


// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

storiesOf('Button', module)
  .add('default', () => 
    <Button title='Sigal' action={() => console.log('Hello Sigal')}  />
  );