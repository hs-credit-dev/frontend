import renderer from 'react-test-renderer';
import Login from '../Login'


describe('Login', () => {

    it('matches snapshot', () => {
    const component = renderer.create(
      <Login />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});

