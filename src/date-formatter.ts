// ./src/date-formatter.ts

export function formatDate (format: string, date: Date): string {
  const isValidFormat = /^(YY|YYYY|MMM|MM|DD|D)(-(YY|YYYY|MMM|MM|DD|D))*$/.test(format)
  if (!isValidFormat) {
    throw new Error("Invalid format string. Use YY, YYYY, MMM, MM, DD, D seperated by '-'")
  }

  const mapper: Record<string, string> = {
    YY: date.getFullYear().toString().slice(-2),
    YYYY: date.getFullYear().toString(),
    MM: (date.getMonth() + 1).toString().padStart(2, '0'),
    MMM: date.toLocaleString('default', { month: 'short' }),
    D: date.getDate().toString(),
    DD: date.getDate().toString().padStart(2, '0')
  }
  return format.split('-').map((token) => mapper[token] ?? token).join('-')
}
