create
database site_mada;

    use
site_mada;

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

insert into user
values (null, 'Jean', 'Randria', 'user@gmail.com', 'mdp', 'Andavamamba');

-- insert into region values (null, 'Analamanga');
INSERT INTO province VALUES (null, 'Antananarivo');
INSERT INTO province VALUES (null, 'Mahajanga');
INSERT INTO province VALUES (null, 'Toamasina');
INSERT INTO province VALUES (null, 'Antsiranana');
INSERT INTO province VALUES (null, 'Fianarantsoa');
INSERT INTO province VALUES (null, 'Toliara');

INSERT INTO site VALUES (null, 'Rova Manjakamiadana', 'Le Rova Manjakamiadana est le palais royal de Madagascar situé à Antananarivo. Il est un symbole historique et culturel du pays.', 'rova.png', 'rova.mp4', 1);
INSERT INTO site VALUES (null, 'Avenue de l''Indépendance', 'L''Avenue de l''Indépendance est une célèbre avenue à Antananarivo, bordée de bâtiments historiques et de boutiques.', 'avenue_independence.png', 'avenue_independence.mp4', 1);
INSERT INTO site VALUES (null, 'Parc national de l''Isalo', 'Le Parc national de l''Isalo est un parc naturel magnifique, connu pour ses canyons, ses piscines naturelles et sa faune unique.', 'isalo.png', 'isalo.mp4', 1);
INSERT INTO site VALUES (null, 'Parc national de Ranomafana', 'Le Parc national de Ranomafana est une réserve de forêt tropicale qui abrite une diversité d''espèces de lémuriens et d''oiseaux.', 'ranomafana.png', 'ranomafana.mp4', 1);
INSERT INTO site VALUES (null, 'Baie de Diego Suarez', 'La Baie de Diego Suarez est une magnifique baie entourée de formations rocheuses, offrant une vue panoramique.', 'diego_suarez.png', 'diego_suarez.mp4', 1);
INSERT INTO site VALUES (null, 'Tsingy de Bemaraha', 'Le Tsingy de Bemaraha est un site géologique unique avec ses formations de calcaire en forme d''aiguilles.', 'tsingy_bemaraha.png', 'tsingy_bemaraha.mp4', 1);
INSERT INTO site VALUES (null, 'Réserve spéciale d''Ankarana', 'La Réserve spéciale d''Ankarana est une réserve naturelle avec ses grottes, ses lacs souterrains et ses tsingy.', 'ankarana.png', 'ankarana.mp4', 1);
INSERT INTO site VALUES (null, 'Île de Nosy Be', 'L''île de Nosy Be est une île paradisiaque avec ses plages de sable blanc, ses eaux turquoise et sa biodiversité marine.', 'nosy_be.png', 'nosy_be.mp4', 1);
INSERT INTO site VALUES (null, 'Parc national de l''Andringitra', 'Le Parc national de l''Andringitra est un parc montagneux qui offre des randonnées spectaculaires et des vues panoramiques.', 'andringitra.png', 'andringitra.mp4', 1);
INSERT INTO site VALUES (null, 'Allée des Baobabs', 'L''Allée des Baobabs est une route bordée de majestueux baobabs, offrant un paysage emblématique de Madagascar.', 'allee_baobabs.png', 'allee_baobabs.mp4', 1);

    insert
into event
values (null, 'Festival des baleines', 'Description avec des textes et des textes', '2023-08-14')

insert into post values(null,'Mlay kely le baleine','image_url','video_url','2023-08-14 18:12:00',1)