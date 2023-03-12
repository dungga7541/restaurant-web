import { React, useState, useEffect } from 'react';
import "./Cart.scss";
import {db} from "../../firebase-config";
import {collection,getDocs ,addDoc,doc,updateDoc,deleteDoc,onSnapshot } from "firebase/firestore";

const Cart = () => {
    const [users,setUsers]=useState([]);
    // const {usersCollectionRef}=collection(db,"users");
    const [newAge,setNewAge]=useState("");
    const [newName,setNewName]=useState(0);

    const createUser =async (user) => {
      await addDoc(collection(db,"users"), {name:newName,age:newAge});
    }
    // const updateUser= async (id,age) => {
    //   const userDoc= doc(db,"users",id);
    //   const newFields ={age:age+1}
    //     await updateDoc(userDoc,newFields);
    // }

    const deleteUser = async (id) => {
      // const userDoc= doc(db,"users",id);
      await deleteDoc(doc(db, "users", id));
      //refesh page
      window.location.reload(false);

    }
    useEffect(() => {
      const getUsers =async ()=>{
        // const querySnapshot = await getDocs(collection(db, "cities"));

        const data=await getDocs(collection(db,"users"));
        setUsers(data.docs.map((docs)=>({...docs.data(),id:docs.id})));
        console.log(data);
      };
      getUsers();
    },[]);
    
  return (
    <div className="shoppingCart">
      <input type="number" className="age" placeholder='age' onChange={(event)=>{setNewAge(event.target.value)}}/>
      <input type="text" className="name" placeholder='name' onChange={(event)=>{setNewName(event.target.value)}}/>
      <button onClick={createUser}>Create User </button>
      <p>//////////////////////////////////////////////////////////////////////////</p>    
      {users.map((user)=>{
        return (
          <div className="abc">
              <td>{user.Age}</td>
              <td>{user.name}</td>
              <button onClick={()=>{deleteUser(user.id)}}>Delete User</button>
              {/* <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>

                <td>Germany</td>
              </tr>
              <tr>
                <td></td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </table> */}
          </div>
          );
        })}
    </div>
  )
}

export default Cart ;
