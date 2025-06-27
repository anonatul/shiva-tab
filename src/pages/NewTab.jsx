import { useEffect, useState } from "react";
import QuoteCard from "../components/QuoteCard";
import ActionButtons from "../components/ActionButtons";

function NewTab() {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/anonatul/shiva-tab/main/public/quotes.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const result = await response.json();
                const randomIdx = Math.floor(Math.random() * result.length);
                setQuote(result[randomIdx]);
            } catch (error) {
                console.log(error);
                setQuote({
                    sanskrit: "उपदेशो हि मूर्खाणां प्रकोपाय न शान्तये।",
                    english_translation: "Teaching the ignorant leads only to their irritation, not peace.",
                    explanation: "Sometimes it’s best to let life teach rather than speak."
                });
            }
        }

        fetchData();
    }, []);


    return (
        <div className="flex flex-col justify-center items-center h-screen animate-fade-in duration-500">
            {quote ? <QuoteCard quote={quote} /> : ""}
            <ActionButtons quote={quote}/>
        </div>
    )
}

export default NewTab;