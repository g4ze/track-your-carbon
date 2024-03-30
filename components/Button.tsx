// Code for default button component
"use client"

export default ({ label, func, classN }: { label: string, func: () => void, classN?: string }) => {
    if (classN) {
        return <button onClick={func} className={classN}>
            {label}
        </button>
    }
    return <button onClick={func} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
        {label}
    </button>
}