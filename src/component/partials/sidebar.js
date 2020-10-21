import React, { useState } from 'react';
import {Link,withRouter} from "react-router-dom";
const Sidebar = props =>{

const [pathName,setPathName] = useState(props.history.location.pathname);

    return(
        <>
                  <ul className="list-group">
                 <li className={pathName==="/user"? "list-group-item active" :"list-group-item"}><Link to="/user">User</Link></li>
                 <li className={pathName==="/role"? "list-group-item active" :"list-group-item"}><Link to="/role">Role</Link></li>
                 <li className={pathName==="/permission"? "list-group-item active" :"list-group-item"}><Link to="/permission">Permission</Link></li>
               </ul>
        </>
    )
}
export  default withRouter(Sidebar);