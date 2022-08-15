import { format, subDays } from 'date-fns'

const fecha = new Date(2020, 10, 10);
const rta = subDays(fecha, 2);
const formattedDate = format(rta, 'yyyy/MM/dd');
console.log("🚀 ~ file: 16-date-fns.ts ~ line 5 ~ formattedDate", formattedDate)
