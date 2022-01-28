import './css/Body.css';


const Body = () => {
  
    return ( 
         
        <div className="body">
         
         <h2>Search Hospitals:</h2>

         <form>
   <label>State       :
        <input type="text" name="State" />
      </label><br/>
  <label>
    District:
    <input type="text" name="District" />
  </label><br/>
  <label>
    Pincode:
    <input type="text" name="Pincode" />
  </label><br/>

  <input type="submit" value="Search" />
</form>
 
        
<hr></hr>
        </div>
    );
}
 
export default Body;