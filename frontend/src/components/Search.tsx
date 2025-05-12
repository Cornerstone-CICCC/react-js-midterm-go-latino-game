import { useState } from 'react';

function Search ({ items }){
    const [query, setQuery] = useState('');

    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
    );
    
    return (
        <div className="flex items-center space-x-4">
            <input 
                type="text"
                className="p-2 border border-gray-400 rounded-md"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul className="bg-white border border-black rounded-md absolute">
                {filteredItems.map((item, index) => (
                    <li key={index} className="p-2">{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search