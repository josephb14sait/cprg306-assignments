import ItemComp from "./item";

export default function ItemList({Item}){

    const item1 = {
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    };
       
    const item2 = {
      name: "bread 🍞",
      quantity: 2,
      category: "bakery",
    };
       
    const item3 = {
      name: "eggs, dozen 🥚",
      quantity: 2,
      category: "dairy",
    };
       
    const item4 = {
      name: "bananas 🍌",
      quantity: 6,
      category: "produce",
    };
       
    const item5 = {
      name: "broccoli 🥦",
      quantity: 3,
      category: "produce",
    };
       
    const item6 = {
      name: "chicken breasts, 1 kg 🍗",
      quantity: 1,
      category: "meat",
    };
       
    const item7 = {
      name: "pasta sauce 🍝",
      quantity: 3,
      category: "canned goods",
    };
       
    const item8 = {
      name: "spaghetti, 454 g 🍝",
      quantity: 2,
      category: "dry goods",
    };
       
    const item9 = {
      name: "toilet paper, 12 pack 🧻",
      quantity: 1,
      category: "household",
    };
       
    const item10 = {
      name: "paper towels, 6 pack",
      quantity: 1,
      category: "household",
    };
       
    const item11 = {
      name: "dish soap 🍽️",
      quantity: 1,
      category: "household",
    };
       
    const item12 = {
      name: "hand soap 🧼",
      quantity: 4,
      category: "household",
    };

    return (
      <div>
          <ul>
              <li><ItemComp iName={item1.name} iQuantity={item1.quantity} iCategory={item1.category}/></li>
              <li><ItemComp iName={item2.name} iQuantity={item2.quantity} iCategory={item2.category}/></li>
              <li><ItemComp iName={item3.name} iQuantity={item3.quantity} iCategory={item3.category}/></li>
              <li><ItemComp iName={item4.name} iQuantity={item4.quantity} iCategory={item4.category}/></li>
              <li><ItemComp iName={item5.name} iQuantity={item5.quantity} iCategory={item5.category}/></li>
              <li><ItemComp iName={item6.name} iQuantity={item6.quantity} iCategory={item6.category}/></li>
              <li><ItemComp iName={item7.name} iQuantity={item7.quantity} iCategory={item7.category}/></li>
              <li><ItemComp iName={item8.name} iQuantity={item8.quantity} iCategory={item8.category}/></li>
              <li><ItemComp iName={item9.name} iQuantity={item9.quantity} iCategory={item9.category}/></li>
              <li><ItemComp iName={item10.name} iQuantity={item10.quantity} iCategory={item10.category}/></li>
              <li><ItemComp iName={item11.name} iQuantity={item11.quantity} iCategory={item11.category}/></li>
              <li><ItemComp iName={item12.name} iQuantity={item12.quantity} iCategory={item12.category}/></li>
        </ul>
      </div>
    );

}
