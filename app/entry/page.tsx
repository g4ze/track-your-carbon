"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function() {
    const router = useRouter();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label htmlFor="calories">Calories:</label>
                <input type="number" id="calories" name="calories" />

                <label htmlFor="food">Food:</label>
                <input type="text" id="food" name="food" />

                <label htmlFor="exercise">Exercise:</label>
                <input type="text" id="exercise" name="exercise" />

                <label htmlFor="water">Water Intake:</label>
                <input type="number" id="water" name="water" />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}