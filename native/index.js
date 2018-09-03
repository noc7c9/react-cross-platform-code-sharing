/*
 * Entry file for react native.
 *
 * Registers the shared component as the root component.
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

// Note: the import is from "shared", it is not a path.
import TimeSinceRender from 'shared/time-since-render';

AppRegistry.registerComponent(appName, () => TimeSinceRender);
