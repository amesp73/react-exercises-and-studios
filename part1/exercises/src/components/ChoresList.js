export default function ChoresList () {
   return(
      <div>
          <h3 className = {classes.choresHeading}>Today's Chores</h3>
          <ul>
            <li className={classes.choresText}>Vaccuum</li>
            <li className={class.choresText}>Sweep</li>
          </ul>
      </div>
   );
}