export default function BookList() {
   let pageTitle = "My Favorite Books";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/d/df/The_Silent_Patient_early_2019_UK_edition.png";
   let book2 = "https://www.publishersweekly.com/cover/9781250133731";
   let book3 = "https://upload.wikimedia.org/wikipedia/en/5/56/TheNameoftheWind_cover.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Silent Patient" />
         <img src={book2} alt="An Anonymous Girl" />
         <img src={book3} alt="Name of the Wind" />
      </div>      
   );
}