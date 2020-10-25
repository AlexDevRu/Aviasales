export const getDurationFromMinutes = (minutes) => {
    const days = Math.floor(minutes / 60 / 24);
    const hours = Math.floor(minutes / 60 % 24);
    const min = minutes % 60;
    return `${days>0 ? days + 'д ' : ''}${hours}ч ${min}м`;
}

export const transplants = (count) => {
    if(count === -1) {
        return 'Все';
    }
    if(count === 0) {
        return 'Без пересадок';
    }
    return `${count} пересадк${count === 1 ? 'а' : 'и'}`;
}