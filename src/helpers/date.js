import { format } from "date-fns";

export function formatDueDate(dueDate) {
    return format(dueDate, 'MM/dd/yyyy');
}


