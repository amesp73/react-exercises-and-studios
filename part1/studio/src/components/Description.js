import React from 'react';
import styles from './Description.module.css'

function RecipeAuthor() {
    let authorLink = "https://sallysbakingaddiction.com/baked-apple-cider-donuts/";
    let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/01/profile-sally.jpg";
    let authorName = "Sally McKenney";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Sally's Baking Recipes" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Sally's Baking Addiction</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Baked Apple Cider Donuts</h1>
                    <p>Homemade cakey, dense, and intensely flavored donuts that are baked, not fried!</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}


export default RecipeDescription;