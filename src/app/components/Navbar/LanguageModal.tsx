import * as React from 'react';

export interface ILanguageModalProps {
    isOpen:boolean,
    

}

export default function LanguageModal (props: ILanguageModalProps) {
    const [onClose,setOnClose] = React.useState(false)
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${props.isOpen ? 'visible' : 'hidden'}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full relative">
        {/* Close button in the top right */}
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700"
          onClick={()=>{
            setOnClose(false)
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal content goes here */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Large Modal</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}
