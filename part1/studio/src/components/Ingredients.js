import styles from './Ingredients.module.css';


export default function RecipeIngredients() {
    let ingredients = ["Apple Cider", "All-purpose Flour", "Baking Soda", "Baking Powder", "Ground Cinammon"];
    
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
    </div>
    );
}