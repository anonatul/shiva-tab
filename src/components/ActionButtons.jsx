import { useState } from "react";
import { TwitterShareButton, TwitterIcon } from 'react-share';

const COPY_RESET_TIMEOUT = 1200;

function ActionButtons({ quote }) {

    if (!quote) return null;

    const [isCopied, setIsCopied] = useState(false);
    const textToCopy = `Sanskrit: ${quote.sanskrit}\nEnglish Translation: ${quote.english_translation}\nExplanation: ${quote.explanation}`;

    // Copies the provided quote's Sanskrit, English translation, and explanation to the clipboard.
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
        } catch (error) {
            console.error('Failed to copy quote:', error);
        } finally {
            setTimeout(() => setIsCopied(false), COPY_RESET_TIMEOUT);
        }
    }

    return (
        <div className="flex gap-6 mt-6 justify-center">
            <button
                className="text-zinc-100 bg-zinc-900 hover:bg-zinc-700 px-5 py-2 rounded-full text-sm font-medium shadow-sm  transition cursor-pointer"
                onClick={handleCopy}
            >
                {isCopied ? "Copied!" : "Copy"}
            </button>

            <TwitterShareButton
                url="https://github.com/anonatul/shiva-tab"
                title={textToCopy}
            >
                <TwitterIcon size={32} round title="Share this quote on X" />
            </TwitterShareButton>
        </div>
    )
}

export default ActionButtons;
