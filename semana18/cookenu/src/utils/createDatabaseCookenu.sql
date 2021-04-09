create table cookenu_users(
  id varchar(255) primary key,
  email varchar(255),
  name varchar(255),
  password varchar(255)
);

create table cookenu_recipes(
  id VARCHAR (255) primary key,
  title varchar(255),
  description text,
  creationDate date
);

create table cookenu_followers(
  id_user varchar(255),
  id_followeduser varchar(255),
  primary key (id_user,id_followeduser)
);
alter table cookenu_followers
add constraint fk_id_user_cookenu_followers
foreign key(id_user)
references cookenu_users(id);
alter table cookenu_followers
add constraint fk_id_followeduser_cookenu_followers
foreign key(id_followeduser)
references cookenu_users(id);
