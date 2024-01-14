import TitlePage from "components/TitlePage/TitlePage";
import { Daily } from "components/daily/Daily";
import { UserProfile } from "components/userCard/UserCard";
import { UserForm } from "components/userForm/UserForm";

export default function Profile() {
    return (

        <div>
            <p>profile</p>
        <TitlePage children={"Profile Settings"}></TitlePage>
        <UserProfile/>
        <div style={{ display: "flex", margin: "auto", gap: "20px" }}>
           <Daily color="#E6533C" iconId={"icon-fork-filled"} text={"Daily calorie intake"} value={"0"}/>
        <Daily color="#E6533C" iconId={"icon-fork-filled"} text={"Daily physical activity"} value={"0 min"}/> 
        </div>
        
        <UserForm/>
        </div>
        
    )
}
