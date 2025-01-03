"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchApiUsers } from "../redux/slice"

export default function(){
    const dispatch = useDispatch();
    const apiUserData = useSelector((state) => state);
    const printData = apiUserData.userData.userApiData;
    console.log(printData);
    return(
        <div>
            <h1>User List From APi</h1>
            <button onClick={() => dispatch(fetchApiUsers())}>Load Users</button>
            <ul>
                {printData != undefined && printData.map((elem) =>{
                    return(
                        <li key={elem.id} style={{listStyle:'none'}}>{elem.id} | {elem.name} | {elem.email}</li>
                    )
                })}
                
            </ul>
        </div>
    )
}