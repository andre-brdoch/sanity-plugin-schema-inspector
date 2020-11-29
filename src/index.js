import { route } from 'part:@sanity/base/router';
import { BiBook } from 'react-icons/bi';
import Tool from './components/Tool.tsx';

const router = route('/', [route('/:typeName')]);

export default {
  title: 'Schemas',
  name: 'schemas',
  router,
  icon: BiBook,
  // Todo: pass options
  component: Tool,
};
