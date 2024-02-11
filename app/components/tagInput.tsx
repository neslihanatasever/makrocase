import React, { useState } from 'react';
import { useStore } from '../store/Data';
function TagInput() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const genres = useStore(state => state.track_genres);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      // Prevent duplicate tags
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  return (
    <div className='p-4' >
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleInputKeyPress}
        placeholder="Tür ara..."
        className="flex flex-col *:border-solid border-2 rounded-xl  cursor-pointer h-10 px-2 mr-4 justify-center w-full"
      />
    <div>
        {genres.map((genre, index) => (
                <span key={index} className="tag inline-block mr-[5px] mb-[5px] mt-[8px] py-[5px] px-[5px] text-black rounded-xl *:border-solid border-2">
                    {genre}
                    <button
                        className="remove-button ml-[5px] bg-transparent border-none text-black cursor-pointer"
                    >
                        &times;
                    </button>
                </span>
            ))}
        {tags.map((tag, index) => (
            
          <span key={index} className="tag inline-block mr-[5px] mb-[5px]  py-[5px] px-[10px] bg-[#007bff] text-white rounded-md">
            {tag}
            <button
              onClick={() => handleTagRemove(tag)}
              className="remove-button ml-[5px] bg-transparent border-none text-black cursor-pointer"
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagInput;
