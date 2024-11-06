export default function ItemComp({iName, iQuantity, iCategory, onSelect}){

    return (
        <div className="bg-indigo-400 mb-10 cursor-pointer hover:bg-indigo-500" onClick={() => onSelect(iName)}>
            <p className="text-2xl p-2">{iName}</p>
            <p className="p-2">Buy {iQuantity} in {iCategory}</p>
        </div>
    );
}