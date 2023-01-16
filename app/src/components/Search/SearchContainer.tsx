import React, { useContext } from 'react';
import { SearchContext } from './SearchProvider';
import { FcSearch } from 'react-icons/fc';

export function Search() {
    const [searchText, setSearchText] = useContext(SearchContext);
    return (
        <div className="flex w-full bg-gray-200 p-1 focus-within:ring">
            <label className="flex items-center">
                <FcSearch size={'1rem'} />
                <input
                    className="flex-1 appearance-none bg-transparent outline-none"
                    id="search"
                    value={searchText || ''}
                    onChange={e => setSearchText(e.target.value)}
                    placeholder="Search..."
                />
            </label>
        </div>
    );
}
