"use client";

export function UiNavigation(): JSX.Element {
    return (
        <div className="text-ash_primary-400 flex justify-between border-ash_primary-400 border-2 rounded-xl px-3 py-2 mb-5 mt-5 mx-2">
            <div className="flex">
                <h1 className="font-extrabold">2lay.net</h1>
                <h1 className="mx-1"> |</h1>
                <h1 className="font-thin">she/her/hers</h1>
            </div>
            <div className="flex gap-2">
                <p>[ Home ]</p>
                <p>[ Home ]</p>
                <p>[ Home ]</p>
            </div>
        </div>
    );
}
