import { useState } from "react";
import QuoteCard from "../components/QuoteCard";

const mockQuote = {
    sanskrit: "शिवः केवलो गुरुः",
    english_translation: "Shiva alone is the ultimate teacher.",
    explanation: "This quote reminds you that all answers lie within yourself."
}

function NewTab() {
    const [quote, setQuote] = useState(mockQuote);
    return (
        <div className="flex justify-center items-center h-screen">
            <QuoteCard quote={quote} />
        </div>
    )
}

export default NewTab;