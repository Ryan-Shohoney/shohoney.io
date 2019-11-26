const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};
const userIsAdminOrOwner = auth => {
  const isAdmin = userIsAdmin(auth);
  const isOwner = userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};

const AccessControl = {
  IsAdmin: userIsAdmin,
  IsOwner: userOwnsItem,
  IsAdminOrOwner: userIsAdminOrOwner
};

module.exports = {
  AccessControl: AccessControl
}