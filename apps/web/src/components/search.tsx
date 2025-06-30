"use client";

import { useState } from "react";

const Search: React.FC<{ onSearch: (query: string) => void; className?: string }> = ({ onSearch, className }) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        onSearch(value);
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Pesquisar..."
                className={`${className} w-full px-4 py-3 border dark:bg-background text-sm rounded-md shadow-sm focus:outline-none text-black dark:text-white`}
            />
        </div>
    );
};

export { Search };
