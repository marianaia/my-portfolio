import React from 'react';

export function Bullets({
    items = []
}) {
    return (
        <div class="border-l-2 border-[#111111] pl-6 space-y-4">
            <ul class="space-y-3  text-sm text-[#333333]">
                {items.map((item, index) => (
                    <li key={index} class="flex items-start gap-2">
                        <span>
                            {item.highlight && (
                                <strong class="text-black font-semibold">{item.highlight}: </strong>
                            )}
                            {item.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}