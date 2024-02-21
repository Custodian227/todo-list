import { format, isToday, add, startOfToday, compareAsc, differenceInWeeks, differenceInDays } from "date-fns";

export function formatDueDate(dueDate) {
    return format(dueDate, 'MM/dd/yyyy');
}

export function formatSQLDueDate(dueDate) {
    return format(dueDate, 'yyyy-MM-dd');
}

export function checkDueDateIsToday(dueDate) {
    return isToday(dueDate);
}

export function getTodayDate() {
    return formatDueDate(startOfToday());
}

export function getDateInWeek() {
    const todayDate = getTodayDate();
    const dateInWeek = add(todayDate, { weeks: 1 });

    const formattedDateInWeek = formatDueDate(dateInWeek);

    return formattedDateInWeek;
}


export function checkDueDateInWeek(dueDate) {
    const dateInWeek = getDateInWeek();
    const todayDate = getTodayDate();

    const resultCompareDateInWeek = compareAsc(dueDate, dateInWeek);
    const resultCompareTodayDate = compareAsc(dueDate, todayDate);

    if(resultCompareDateInWeek === -1 && resultCompareTodayDate !== -1) {
        return true;
    } else {
        return false;
    }
}









