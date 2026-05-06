

export const formatMonth = (date) =>
    new Date(date).toLocaleString('en-US', {
        month: 'short',
        year: 'numeric'
    });