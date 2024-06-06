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

function ProfilePage({ handleEdit, userInfo }) {
  return (
    <div className="my-3">
      <ProfileForm
        handleSubmit={handleEdit}
        userInfo={userInfo}
      />
    </div>
  );
}

export default ProfilePage;
