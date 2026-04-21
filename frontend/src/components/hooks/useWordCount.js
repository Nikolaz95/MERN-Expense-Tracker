import { useMemo } from 'react';

export const useWordCount = (text, maxWords) => {
    const wordCount = useMemo(() => {
        if (!text || text.trim() === "") return 0;
        // Razbijamo string na razmacima i filtriramo prazne rezultate
        return text.trim().split(/\s+/).filter(Boolean).length;
    }, [text]);

    const isOverLimit = wordCount > maxWords;

    return { wordCount, isOverLimit };
};