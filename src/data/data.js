import logo from "../assets/header-logo.png";
import watch from "../assets/watch.png";
import directions from "../assets/directions.png";
import call from "../assets/call.png";
import soup from "../assets/menu-soup.png";
import bowl from "../assets/menu-bowl.png";
import eggs from "../assets/menu-eggs.png";
import fish from "../assets/menu-fish.png";
import salad from "../assets/menu-salad.png";
import mix from "../assets/menu-mix.png";

let data = {
    header: {
        links: [
    {id: 1, link: "", name: "Recipes"},
    {id: 2, link: "", name: "Chefs"},
    {id: 3, link: "", name: "Contacts"}
    ],
    logo: logo
    },
    section: {
        cards: [
            {id: 1, img: watch, title: "Today 10:00 am - 7:00 pm", description: "Working hours"},
            {id: 2, img: directions, title: "Velyka Vasylkivska 100", description: "Get Directions"},
            {id: 3, img: call, title: "+38 (063) 833 24 15", description: "Call Online"},
        ]
    },
    menu: {
        box: [
            {id: 1, img: soup, title: "Featured Meal", description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...", price: "$59.99"},
            {id: 2, img: bowl, title: "Featured Meal", description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...", price: "$59.99"},
            {id: 3, img: eggs, title: "Featured Meal", description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...", price: "$59.99"},
            {id: 4, img: fish, title: "Featured Meal", description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...", price: "$59.99"},
            {id: 5, img: salad, title: "Featured Meal", description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...", price: "$59.99"},
            {id: 6, img: mix, title: "Featured Meal", description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...", price: "$59.99"},
        ]
    },
}

export default data;