import {ConsoleTablePluginOptions} from './ConsoleTablePluginOptions';
import {PluginContext, ZitrusmixPlugin} from 'zitrusmix';
import {line} from './utils/line';
import {formatCell} from "./utils/formatCell";
import {Row} from './Row';

export class ConsoleTablePlugin implements ZitrusmixPlugin<ConsoleTablePluginOptions> {
    readonly options: ConsoleTablePluginOptions;

    constructor(options?: Partial<ConsoleTablePluginOptions>) {
        this.options = Object.assign(new ConsoleTablePluginOptions(), options);
    }

    process(context: PluginContext<ConsoleTablePluginOptions>): Promise<any> | void {
        const log = this.options.out;

        const rows: Array<Row> = Array.from(context.collection).map(element => {
            const row = new Row();

            row.column.set('uri', element.uri);
            Object.entries(element).forEach(([key, value]) => row.column.set(key, value));

            return row;
        });

        const columns = new Set(rows.flatMap(row => [...row.column.keys()]));
        const columnNames = [...columns];

        const topDividerLine = columnNames.map(value => line(value, this.options)).join('─┬─');
        const bottomDividerLine = columnNames.map(value => line(value, this.options)).join('─┴─');
        const dividerLine = columnNames.map(value => line(value, this.options)).join('─┼─');
        const headerRow = columnNames.map(value => formatCell(value, value, this.options)).join(' | ');

        log('');
        log(topDividerLine);
        log(headerRow);
        log(dividerLine);

        rows.forEach(row => {
            const line = columnNames.map(columnName => formatCell(columnName, row.column.get(columnName), this.options)).join(' | ');
            console.log(line);
        });

        log(bottomDividerLine);
        log('');
    }
}

