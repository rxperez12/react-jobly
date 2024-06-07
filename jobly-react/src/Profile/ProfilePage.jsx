import ProfileForm from "./ProfileForm.jsx";
import Alert from "../Alert.jsx";
import { v4 as uuid } from "uuid";

/** Profile Page component
 *
 * Props:
 * - handleEdit fn to be called in parent
 * - userData like { username, firstName, lastName, email, isAdmin, jobs }
 *
 *
 * State:
 * - none
 *
 * RoutesList -> ProfilePage -> ProfileForm
 */

function ProfilePage({ handleEdit, userData }) {
  return (
    <div className="my-3">
      <ProfileForm
        handleSubmit={handleEdit}
        userData={userData}
      />
    </div>
  );
}

export default ProfilePage;
