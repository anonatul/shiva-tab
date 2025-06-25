function QuoteCard({ quote }) {
    return (

        <div className="text-center space-y-2 p-4">
            <h1 className="text-center text-6xl font-sanskrit text-gray-800">
                {quote.sanskrit}
            </h1>
            <p className="font-noto-serif text-2xl text-gray-700 italic">
                {quote.english_translation}
            </p>
            <p className="font-noto-serif text-lg text-gray-500">
                {quote.explanation}
            </p>
        </div>

    )
}

export default QuoteCard;