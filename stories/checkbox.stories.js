import { storiesOf } from '@storybook/vue';

storiesOf('Checkbox', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-checkbox itemId="a" itemValue="a">item 1</ca-checkbox>
    <ca-checkbox itemId="b" itemValue="b">item 2</ca-checkbox>
    <ca-checkbox itemId="c" itemValue="c">item 3</ca-checkbox>
    `,
  }));
