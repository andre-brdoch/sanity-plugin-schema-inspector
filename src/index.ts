import { route } from 'part:@sanity/base/router';
import { BiBook } from 'react-icons/bi';
import Tool from './components/Tool';

const router = route('/', [route('/:typeName')]);

export default {
  title: 'Schemas',
  name: 'schemas',
  router,
  icon: BiBook,
  component: Tool,
};
