import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import TimeSinceRender from 'shared/time-since-render';

AppRegistry.registerComponent(appName, () => TimeSinceRender);
