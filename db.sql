create database site_mada;

use site_mada;

create table user
(
    id      int auto_increment,
    nom     varchar(50),
    prenom  varchar(50),
    mail    varchar(50),
    mdp     varchar(60),
    adresse varchar(50),
    primary key (id)
);

create table region
(
    id    int auto_increment,
    label varchar(70),
    primary key (id)
);

create table site
(
    id          int auto_increment,
    label       varchar(100),
    description varchar(100),
    image       varchar(70),
    video       varchar(70),
    idRegion    int,
    primary key (id),
    foreign key (idRegion) references user (id)
);

create table event
(
    id          int auto_increment,
    label       varchar(50),
    description varchar(50),
    date_event  date,
    primary key (id)
);
create table post
(
    id          int auto_increment,
    description blob,
    image       text,
    video       text,
    date_post datetime,
        idUser int,
    primary key (id),
    foreign key (idUser) references user (id)
);

insert into user values (null, 'Jean', 'Randria', 'jean@gmail.com', 'mdp', 'Andavamamba');

insert into region values (null, 'Analamanga');
insert into site values (null, 'Rova Manjakamiadana', 'Description avec des textes et des textes', 'lien_image', 'lien_video', 1);
insert into event values (null, 'Festival des baleines', 'Description avec des textes et des textes', '2023-08-14');
insert into post values(null,'Mlay kely le baleine','image_url','video_url','2023-08-14 18:12:00',1);