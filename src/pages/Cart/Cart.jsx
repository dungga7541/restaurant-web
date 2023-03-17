import { React, useState, useEffect } from 'react';
import "./Cart.scss";
import {db} from "../../firebase-config";
import {collection,getDocs ,addDoc,doc,updateDoc,deleteDoc,onSnapshot } from "firebase/firestore";
import login_res from "../../assets/images/background-login-res.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Cart = () => {
    const [users,setUsers]=useState([]);
    const [quantity,setQuantitys]=useState(1);

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
      <div className='background'>
          <img src={login_res} alt="login_res"/>
          <h2 >My Cart</h2>
      </div>
      <input type="number" className="age" placeholder='age' onChange={(event)=>{setNewAge(event.target.value)}}/>
      <input type="text" className="name" placeholder='name' onChange={(event)=>{setNewName(event.target.value)}}/>
      {/* <input type="number" className="age" placeholder='age' onChange={(event)=>{setNewAge(event.target.value)}}/>
      <input type="text" className="name" placeholder='name' onChange={(event)=>{setNewName(event.target.value)}}/>
      <input type="number" className="age" placeholder='age' onChange={(event)=>{setNewAge(event.target.value)}}/>
      <input type="text" className="name" placeholder='name' onChange={(event)=>{setNewName(event.target.value)}}/> */}
      <button onClick={createUser}>Create User </button>
      <p>//////////////////////////////////////////////////////////////////////////</p>    
      <div className='mainPage'>
          <div className="abc">
              <table className="tableCart">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {users.map((user)=>{
                  return (
                  <tr className='columnCart'>
                    <td><div>
                      <img src="" alt="user"/>
                    </div></td>
                    <td></td>
                    <td>{user.Age}$</td>
                    <td >
                      <div className='quantity'>
                        {/* <div className='sub' onClick={setQuantitys(quantity-1)}>-</div>
                        <div>{quantity}</div>
                        <div className='add' onClick={setQuantitys(quantity+1)}>+</div> */}
                      </div>
                    </td>
                    <td>{user.name}</td>
                    <td ><div className='actions' onClick={()=>{deleteUser(user.id)}}>X</div></td>
                  </tr>
                  );

                })}

                <thead className='totalPrice'>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Total</th>
                    <th>1234$</th>
                    <th className='checkOut'>CheckOut<ArrowForwardIosIcon style={{ width: "20px",height:"20px" }}/></th>
                  </tr>
                </thead>
              </table>

        </div>
      </div>
    </div>
  )
}

export default Cart ;
