import { format } from "date-fns";

export function formatDisplayDueDate(dueDate) {
    return format(dueDate, 'MM/dd/yyyy');
}

export function formatSQLDueDate(dueDate) {
    return format(dueDate, 'yyyy-MM-dd');
}


