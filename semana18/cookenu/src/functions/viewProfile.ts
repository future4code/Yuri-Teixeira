import connection from "../connection";

const viewProfile = (id: string) => {
  return connection(`cookenu_users`)
    .select(`id`, `name`, `email`)
    .where({ id });
};

export default viewProfile;
