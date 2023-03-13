import React, { useContext } from 'react';
import { SelectedItemContext } from '../Store';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { SearchContext } from '../Search';
import { useParams } from 'react-router-dom';

export function Header() {
    const { selectedItem, popSelectedItem } = useContext(SelectedItemContext);
    const [searchText, setSearchText] = useContext(SearchContext);
    const showArrow = selectedItem || searchText;

    return (
        <div className="min-h-[10px] flex-1 border-b border-b-black bg-gray-400">
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
