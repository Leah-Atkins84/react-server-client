import axios from 'axios';
import{useState} from 'react';

function CreatureForm() {
    const [newCreatureName, setNewCreatureName] = useState('');
    const [newCreatureOrigin, setNewCreatureOrigin] = useState();


    const addCreature = (event) => {
        event.preventDefault();
        console.log('submitted');
        // axios({
        //     method: 'POST',
        //     url: '/creature',
        //     data:{
        //         name: newCreatureName,
        //         origin: newCreatureOrigin

        //     }
        // })
            axios.post('/creature', {name: newCreatureOrigin, origin: newCreatureOrigin})
            .then((response) => {
                console.log('post response is', response);
                // call fetchCreatures
            })
            .catch((error) =>{
                console.log('post error', error);
            })
    }
   
   
    return(
      <>
          <h2>Add Creature</h2>
          <form onSubmit ={addCreature}>
                <label htmlFor="name">Name: </label>
                <input id="name" onChange={(event) => setNewCreatureName(event.target.value)}/>
                <label htmlFor="origin">Origin:</label>
                <input id ="origin" onChange={(event) => setNewCreatureOrigin(event.target.value)} />
                <button type="submit">Add New Creature</button>
          </form>
      </>
    )
}

export default CreatureForm;