import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow, render, mount } from 'enzyme';

global.shallowa = shallow;
global.render = render;
global.mount = mount;

Enzyme.configure({ adapter: new Adapter() });
