import ProfileForm from "./ProfileForm";

/** Profile Page component
 *
 * Props:
 * - handleEdit fn to be called in parent
 *
 * State:
 * -
 *
 * RoutesList -> ProfilePage -> ProfileForm
 */

function ProfilePage({ handleEdit }) {
  return (
    <div>
      <h1>Profile Page</h1>
      <ProfileForm handleSubmit={handleEdit} />
    </div>
  );
}

export default ProfilePage;
