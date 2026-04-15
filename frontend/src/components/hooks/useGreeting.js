import { useState, useEffect } from 'react';

const useGreeting = () => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const calculateGreeting = () => {
            const hour = new Date().getHours();

            if (hour >= 5 && hour < 12) {
                setGreeting("Good Morning");
            } else if (hour >= 12 && hour < 18) {
                setGreeting("Good Afternoon");
            } else {
                setGreeting("Good Evening");
            }
        };

        calculateGreeting();

        const interval = setInterval(calculateGreeting, 3600000);
        return () => clearInterval(interval);
    }, []);

    return greeting;
};

export default useGreeting;