import { useState } from 'react';

function useCopyToClipboard() {

    const [copied, setCopied] = useState(false);

    const copy = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
        } catch {
            setCopied(false);
        }
    }

    return [copied, copy]
}

export default useCopyToClipboard
