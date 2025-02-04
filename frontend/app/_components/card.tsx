const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-4 py-2 text-zinc-200 bg-zinc-800 border border-zinc-700">
            {children}
        </div>
    );
}

export default Card;
