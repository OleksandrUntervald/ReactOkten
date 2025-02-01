import {IUser} from "../../moduls/IUser.ts";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div>{user.username}</div>
    );
};