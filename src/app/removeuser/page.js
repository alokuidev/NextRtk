'use client'

import { useSelector,useDispatch } from "react-redux"
import { removeUser } from "../redux/slice";
export default function page(){
    const userData = useSelector((data) => data.users);
    const dispatch = useDispatch();
    
    return (
        <div className="user-list-section">
              <h2>User List</h2>
              <ul id="userList">
              {userData.map((elem) => {
                        return (
                          <li key={elem.id}>
                            <div>{elem.name}</div>
                            <div>{elem.email}</div>
                            <div
                              onClick={() => dispatch(removeUser(elem.id))}
                              style={{ fontSize: "16px", color: "red", cursor: "pointer" }}
                            >
                              delete
                            </div>
                          </li>
                        );
                      })}
              </ul>
            </div>
    )
}