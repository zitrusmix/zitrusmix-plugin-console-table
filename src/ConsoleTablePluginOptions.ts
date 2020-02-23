export class ConsoleTablePluginOptions {
    readonly map: ((element: any) => any) | null;
    readonly out: ((message: string) => void);
    readonly columns: Array<string> | null;
    readonly columnColors: Map<string, string>;
    readonly columnWidth: Map<string, number>;
    readonly columnWidthDefault: number;

    constructor() {
        this.map = null;
        this.out = console.log;

        this.columns = null;
        this.columnWidthDefault = 20;
        this.columnWidth = new Map(Object.entries(
            {
                uri: 20
            }
        ));

        this.columnColors = new Map(Object.entries(
            {
                uri: '\x1b[31m'
            }
        ));
    }
}
