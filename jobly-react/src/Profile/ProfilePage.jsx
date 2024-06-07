import ProfileForm from "./ProfileForm";

/** Profile Page component
 *
 * Props:
 * - handleEdit fn to be called in parent
 * - userInfo
 *
 * State:
 * -
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
