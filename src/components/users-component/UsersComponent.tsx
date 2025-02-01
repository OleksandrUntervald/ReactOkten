import {useEffect, useState} from "react";
import {IUser} from "../../moduls/IUser.ts";
import {getALl} from "../../servises/general.api.service.ts";
import {IBaseResponseModel} from "../../moduls/IBaseResponseModel.ts";
import {UserComponent} from "./UserComponent.tsx";


export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() =>{
        getALl<IBaseResponseModel & { users: IUser[] }>('/users')
            .then(({users}) => setUsers(users));
    }, []);
    return (
        <div>
            {
                users.map((user: IUser) =>  <UserComponent  key={user.id} user={user} /> )
            }
        </div>
    );
};