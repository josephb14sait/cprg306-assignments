export default function ItemComp({iName, iQuantity, iCategory}){

    return (
        <li>
            <div className="bg-indigo-400 mb-10">
                <p className="text-2xl p-2">{iName}</p>
                <p className="p-2">Buy {iQuantity} in {iCategory}</p>
            </div>
        </li>
    );
}