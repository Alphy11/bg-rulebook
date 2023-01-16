import React, { useContext } from 'react';
import { SelectedItemContext } from '../Store';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { SearchContext } from '../Search';

export function Header() {
    const { selectedItem, popSelectedItem } = useContext(SelectedItemContext);
    const [searchText, setSearchText] = useContext(SearchContext);
    const showArrow = selectedItem || searchText;

    return (
        <div className="flex-1 border-b border-b-black bg-gray-400 px-1">
            <div className="pl-0.5">
                <AiOutlineArrowLeft
                    visibility={showArrow ? 'visible' : 'hidden'}
                    onClick={() => {
                        popSelectedItem();
                        setSearchText(null);
                    }}
                    size={24}
                />
            </div>
            <div className="flex-1" />
        </div>
    );
}
