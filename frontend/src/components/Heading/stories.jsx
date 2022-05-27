import Heading from '.';

export default {
  title: 'Heading',
  component: Heading,
  argsTypes: {
    children: 'Não sei',
  },
};

export const Template = (args) => <Heading {...args} />;
