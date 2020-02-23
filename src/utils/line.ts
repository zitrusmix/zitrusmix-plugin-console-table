import {ConsoleTablePluginOptions} from '../ConsoleTablePluginOptions';

export function line(columnName: string, options: ConsoleTablePluginOptions): string {
    const columnWidth = options.columnWidth.get(columnName) || options.columnWidthDefault;

    return ''.padEnd(columnWidth, '─');
}
