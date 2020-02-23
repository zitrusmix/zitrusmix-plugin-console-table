import {ConsoleTablePluginOptions} from '../ConsoleTablePluginOptions';

const RESET = '\x1b[0m';

export function formatCell(columnName: string, value: any | null, options: ConsoleTablePluginOptions): string {
    let cellText = (value || '').toString();
    const columnWidth = options.columnWidth.get(columnName) || options.columnWidthDefault;


    if (cellText.length > columnWidth) {
        cellText = cellText.slice(0, columnWidth - 1);
        cellText += '…';
    }

    cellText = cellText.padEnd(columnWidth, ' ');

    if (options.columnColors.has(columnName)) {
        cellText = [options.columnColors.get(columnName), cellText, RESET].join('');
    }

    return cellText;
}
