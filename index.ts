import {ConsoleTablePlugin} from './src/ConsoleTablePlugin';
import {ConsoleTablePluginOptions} from './src/ConsoleTablePluginOptions';
import {ZitrusmixPlugin} from 'zitrusmix';

export function consoleTable(options?: Partial<ConsoleTablePluginOptions>): ZitrusmixPlugin<ConsoleTablePluginOptions> {
    return new ConsoleTablePlugin(options);
}
