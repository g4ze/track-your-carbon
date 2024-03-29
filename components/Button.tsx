// Code for default button component
"use client"

export default({label,func}: {label: string, func: ()=>void})=>{
    return <button onClick={func} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
        {label}
    </button>
}