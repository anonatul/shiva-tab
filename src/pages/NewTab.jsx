import { useEffect, useState } from "react";
import QuoteCard from "../components/QuoteCard";
import ActionButtons from "../components/ActionButtons";
import useRandomQuote from "../hooks/useRandomQuote";

function NewTab() {

    const quote = useRandomQuote();

    return (
        <div className="flex flex-col justify-center items-center h-screen animate-fade-in duration-500">
            {quote ? <QuoteCard quote={quote} /> : ""}
            <ActionButtons quote={quote}/>
        </div>
    )
}

export default NewTab;