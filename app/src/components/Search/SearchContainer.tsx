import React, { useContext } from 'react';
import { SearchContext } from './SearchProvider';
import { FcSearch } from 'react-icons/fc';

export function Search() {
    const [searchText, setSearchText] = useContext(SearchContext);
    return (
        <div className="w-full bg-gray-200 focus-within:ring p-1 flex">
            <label className="flex items-center">
                <FcSearch size={'1rem'} />
                <input
                    className="appearance-none bg-transparent outline-none flex-1"
                    id="search"
                    value={searchText || ''}
                    onChange={e => setSearchText(e.target.value)}
                    placeholder="Search..."
                />
            </label>
        </div>
    );
}
