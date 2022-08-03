import renderer from 'react-test-renderer';
import About from '../About'


describe('About', () => {

    it('matches snapshot', () => {
    const component = renderer.create(
      <About />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});