// ./src/date-formatter.ts


/* List of all available parsing tokens
-----------------------------------------
Input   Example             Description
-----------------------------------------
YY	    01	                Two-digit year
YYYY	  2001	              Four-digit year
MM	    01-12	              Month, 2-digits
MMM	    Jan-Dec	            The abbreviated month name
D	      1-31	              Day of month
DD	    01-31	              Day of month, 2-digits
*/

export function formatDate(format: string, date: Date): string {
    const isValidFormat = /^(YY|YYYY|MMM|MM|DD|D)(-(YY|YYYY|MMM|MM|DD|D))*$/.test(format)
    if (!isValidFormat) {
        throw new Error("Invalid format string. Use YY, YYYY, MMM, MM, DD, D seperated by '-'");
    }

    const mapper: Record<string, string> = {
        "YY": date.getFullYear().toString().slice(-2),
        "YYYY": date.getFullYear().toString(),
        "MM": (date.getMonth() + 1).toString().padStart(2, "0"),
        "MMM": date.toLocaleString('default', { month: 'short' }),
        "D": date.getDate().toString(),
        "DD": date.getDate().toString().padStart(2, "0"),
    }
    return format.split('-').map((token) => mapper[token] || token).join('-')
}
