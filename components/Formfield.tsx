import { useSession } from "next-auth/react";
import LandingPage from "./LandingPage";
import { JsonArray, JsonObject } from "@prisma/client/runtime/library";

export default function({labelName, placeholder, id, formData, setFormData, options}:{formData:any,setFormData:any,labelName:string, placeholder:string, id:string, options?:{ id: Number, value: string, label: string }[]}){

    return(
        <>
        {options &&
        <div className='flex animate-fade-in'>
            <label className='m-2 text-right w-1/2 animate-slide-up'>
                {labelName}
            </label>
            <select
                className="appearance-none m-1 w-1/2 text-left border border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline animate-slide-up"
                style={{ border: 'none' }}
                id="activity1"
                onChange={(e) => {
                    setFormData({...formData, [id]: e.target.value});
                }}
            >
                {(options as { id: Number, value: string, label: string }[]).map((option) => (
                    <option key={option.id.toString()} value={option.value}>{option.label}</option>
                ))}
            </select>
            </div>
        }
        {!options &&
        <div className='flex animate-fade-in'>
            <label className='m-2 text-right w-1/2 animate-slide-up'>
                {labelName}
            </label>
            <input
                className="appearance-none m-1 w-1/2 text-left border border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline animate-slide-up"
                style={{ border: 'none' }}
                id="activity1"
                type="text"
                placeholder={placeholder}
                onChange={(e) => {
                    setFormData({...formData, [id]: e.target.value});
                }}
            />
        </div>
        }
        </>
    )
}