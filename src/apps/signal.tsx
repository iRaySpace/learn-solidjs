import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

const Signal: Component = () => {
    const [name, setName] = createSignal("");
    return (
        <main>
            <input
                placeholder="Ivan Ivanov"
                onInput={(e) => setName(e.currentTarget.value)}
            />
            <div>So, you are {name}!</div>
        </main>
    )
}

export default Signal;
