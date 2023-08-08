import SaveButton from './SaveButton';
import ClickedButton from './ClickedButton';


function Button(props) {
  const saveButton = props.SaveButton;
  const clickedButton = props.ClickedButton;
  
  if (saveButton) {
    return
      <SaveButton />;
    }
    return
      <ClickedButton />;
    
  }
  
  
  // return saveButton ? <SavedButton /> : <ClickedButton />
//  }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 