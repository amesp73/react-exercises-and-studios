import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

const listItem = oceans.map(ocean => 
   <div key={ocean.id}>
      <img className="img" src={ocean.image} alt={ocean.name}/>
   </div>
   )


function Profile()
{
   return(
      <>
         <ul>
            {listItem}
         </ul>
         <Button />
      </>  
   );
}

export default Profile;


   