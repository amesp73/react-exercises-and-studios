import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const chores = ["Vaccum", "Sweep"];
      return(
         <div class="chores">
             <h1 className={classes.choresHeading}>Today's Chores</h1>
             <ul>
               <li className={classes.choresText}>{chores[0]}</li>
               <li className={classes.choresText}>{chores[1]}</li>
             </ul>
         </div>
      );
   };
}

export default ChoresList;