import { Injectable } from '@angular/core';
import Tabulator from 'tabulator-tables';

@Injectable()
export class TabulatorService {
    tabulatorDiv = document.createElement('div');
    columns: any;

    /** Configures the columns for the Tabulator table based on: a data row from the data array, keys to ignore, and the desired column width. */
    private setUpColumns(dataRow: any, keysToIgnore: Array<string>, columnWidth: string) {          
        /** Set up the columns based on the fields in one of the rows from the data object. */
        for (const [key] of Object.entries(dataRow)) {
          if(keysToIgnore.includes(key))
            continue;
          var column = Object();
          column.title = key.charAt(0).toUpperCase() + key.slice(1);
          column.field = key;
          column.width = columnWidth;
          this.columns.push(column);            
        }
    }

    /** Draws a Tabulator table based on the provided parameters.
     * 
     *  Returns: the Tabulator object.
     * 
     *  Parameters:
     *  
     *  - `divID` : The id value of the target <div> element. Tabulator will add the table into this target div by using document.getElementById(divID) to find the target div.
     *  - `data` : The array of data objects for Tabulator to render into the table rows.
     *  - `columns` : The array of column objects for the Tabulator table to render.
     *  - `keysToIgnore` : An array of strings containing columns to ignore. Example: if the data contains an "id" property, and "id" is in the keysToIgnore array, then the table will not display an "id" column.
     * 
     * 
     */
    drawTable(divID: string, data: Array<any>, columns: Array<any>, keysToIgnore: Array<string>, columnWidth: string ): any {        
        this.columns = columns;
        this.setUpColumns(data[0], keysToIgnore, columnWidth);

        var tabulator = new Tabulator(this.tabulatorDiv, {
          data: data,
          reactiveData:true,
          columns: columns,
          layout: 'fitDataStretch',
          height: "600px"
        });

        var targetDiv = document.getElementById(divID);
        if(targetDiv !== null)
            targetDiv.appendChild(this.tabulatorDiv);
    
        return tabulator
      }
}