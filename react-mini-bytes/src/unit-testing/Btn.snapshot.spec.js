
import renderer from 'react-test-renderer';
import Btn from './Btn'

it('renders correctly', () => {
    const tree = renderer.create(<Btn />).toJSON();
    expect(tree).toMatchSnapshot();
});