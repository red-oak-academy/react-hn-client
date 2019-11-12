import sanitizeHtml from "sanitize-html"

const defaultOptions = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p'],
    allowedAttributes: {
        'a': ['href']
    },
};

export default function sanitize(dirty, options) {
    return {
        __html: sanitizeHtml(
            dirty,
            {...defaultOptions, ...options}
        )
    }
};