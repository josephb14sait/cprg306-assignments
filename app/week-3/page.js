import ItemList from "./item-list";

export default function Page(){

    return(
        <main className="p-5">
            <h1 className="font-bold text-2xl mb-5">Shopping List</h1>
            <ItemList />

        </main>
    );
}