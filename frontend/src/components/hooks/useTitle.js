import { useEffect, useState } from 'react';

function useTitle(initialTitle, initialIcon) {
    const [title, setTitle] = useState(initialTitle);
    const [icon, setIcon] = useState(initialIcon);

    useEffect(() => {
        // Title
        document.title = title;

        // Favicon
        if (icon) {
            let link = document.querySelector("link[rel='icon']");

            if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.head.appendChild(link);
            }

            link.href = icon;
        }

        return () => {
            document.title = initialTitle;
        };
    }, [title, icon, initialTitle]);

    return { setTitle, setIcon };
}

export default useTitle;