const Tooltip=()=>{
    return(
       <span
         className=" z-50 whitespace-nowrap rounded bg-black px-2 py-1 text-white absolute -top-10 left-1/2 ml-2 -translate-x-1/2 before:content-[''] before:absolute before:-translate-x-1/2 before:left-1/2 before:top-full before:border-4 before:border-transparent before:border-t-black opacity-0 group-hover:opacity-100 transition pointer-events-none">
         💅 means " I don't care "
       </span>
    );
};

export default Tooltip;