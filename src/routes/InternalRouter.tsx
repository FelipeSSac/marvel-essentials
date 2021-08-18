import {
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import { HeroesSection } from '../components/Molecule/HeroesSection';
import { MoviesSection } from '../components/Molecule/MoviesSection';
import { HQsSection } from '../components/Molecule/HQsSection';

export default function InternalRouter() {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: {
      opacity: 0, transform: 'translateY(50px)', width: '100%',
    },
    enter: {
      opacity: 1, transform: 'translateY(0)', width: '100%', position: 'absolute',
    },
    leave: {
      opacity: 0, transform: 'translateY(50px)', width: '100%', position: 'absolute',
    },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Redirect exact from="/" to="/heroes" />
        <Route path="/heroes" component={HeroesSection} />
        <Route path="/movies" component={MoviesSection} />
        <Route path="/hqs" component={HQsSection} />
      </Switch>
    </animated.div>
  ));
}
