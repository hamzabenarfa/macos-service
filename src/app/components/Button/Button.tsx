interface Props {
  title: string;
}
export default function Button ({ title }: Props) {

  return (
    <div>  
      <a href="tel:0970708221" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium
         text-[#1353a7] transition duration-300 ease-out border-2 border-[#1353a7] rounded-full shadow-md group" >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full 
          text-white duration-300 -translate-x-full bg-[#1353a7] group-hover:translate-x-0 ease">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full
         text-[#1353a7] transition-all duration-300 transform group-hover:translate-x-full ease">
          {title}
        </span>
        <span className="relative invisible">{title}</span>
      </a>
    </div>
  );
}
