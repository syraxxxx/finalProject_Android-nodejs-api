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
    description text,
    image       varchar(100),
    video       varchar(100),
    idRegion    int,
    primary key (id),
    foreign key (idRegion) references user (id)
);

create table event
(
    id          int auto_increment,
    label       varchar(50),
    description text,
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

INSERT INTO site VALUES (null, 'Rova Manjakamiadana', 'Le Rova Manjakamiadana est le palais royal de Madagascar situé à Antananarivo. Il est un symbole historique et culturel du pays.', 'rova', 'rova.mp4', 1);
INSERT INTO site VALUES (null, 'Avenue de l''Indépendance', 'L''Avenue de l''Indépendance est une célèbre avenue à Antananarivo, bordée de bâtiments historiques et de boutiques.', 'avenue_independence', 'avenue_independence.mp4', 1);
INSERT INTO site VALUES (null, 'Parc national de l''Isalo', 'Le Parc national de l''Isalo est un parc naturel magnifique, connu pour ses canyons, ses piscines naturelles et sa faune unique.', 'isalo', 'isalo.mp4', 1);
INSERT INTO site VALUES (null, 'Parc national de Ranomafana', 'Le Parc national de Ranomafana est une réserve de forêt tropicale qui abrite une diversité d''espèces de lémuriens et d''oiseaux.', 'ranomafana', 'ranomafana.mp4', 1);
INSERT INTO site VALUES (null, 'Baie de Diego Suarez', 'La Baie de Diego Suarez est une magnifique baie entourée de formations rocheuses, offrant une vue panoramique.', 'diego_suarez', 'diego_suarez.mp4', 1);
INSERT INTO site VALUES (null, 'Tsingy de Bemaraha', 'Le Tsingy de Bemaraha est un site géologique unique avec ses formations de calcaire en forme d''aiguilles.', 'tsingy_bemaraha', 'tsingy_bemaraha.mp4', 1);
INSERT INTO site VALUES (null, 'Réserve spéciale d''Ankarana', 'La Réserve spéciale d''Ankarana est une réserve naturelle avec ses grottes, ses lacs souterrains et ses tsingy.', 'ankarana', 'ankarana.mp4', 1);
INSERT INTO site VALUES (null, 'Île de Nosy Be', 'L''île de Nosy Be est une île paradisiaque avec ses plages de sable blanc, ses eaux turquoise et sa biodiversité marine.', 'nosy_be', 'nosy_be.mp4', 1);
INSERT INTO site VALUES (null, 'Parc national de l''Andringitra', 'Le Parc national de l''Andringitra est un parc montagneux qui offre des randonnées spectaculaires et des vues panoramiques.', 'andringitra', 'andringitra.mp4', 1);
INSERT INTO site VALUES (null, 'Allée des Baobabs', 'L''Allée des Baobabs est une route bordée de majestueux baobabs, offrant un paysage emblématique de Madagascar.', 'allee_baobabs', 'allee_baobabs.mp4', 1);

INSERT INTO event 
VALUES
    (null, 'Festival des Lémuriens', 'Un festival célébrant la diversité des lémuriens malgaches et la préservation de leur habitat naturel.', '2023-08-06'),
    (null, 'Fête de l''Indépendance', 'Célébration de l''indépendance de Madagascar avec des défilés, des spectacles culturels et des festivités.', '2023-08-10'),
    (null, 'Festival de la Vanille', 'Un événement dédié à la célèbre vanille de Madagascar, avec des dégustations, des ateliers et des animations.', '2023-08-15'),
    (null, 'Circuit des Tsingy', 'Une aventure passionnante à travers les formations rocheuses spectaculaires des Tsingy de Bemaraha.', '2023-08-20'),
    (null, 'Festival du Riz', 'Une célébration de la culture malgache avec des danses, des chants et des plats traditionnels à base de riz.', '2023-08-25'),
    (null, 'Festival du Baobab', 'Un festival mettant en avant l''emblématique arbre de baobab malgache avec des expositions et des activités.', '2023-08-30');

INSERT INTO event 
VALUES (null, 'Festival de la Vanille', 'Un événement dédié à la célèbre vanille de Madagascar, mettant en avant la culture, la cuisine et les utilisations de la vanille.', '2023-08-07');

INSERT INTO event 
VALUES (null, 'Course de Pirogues', 'Une compétition passionnante de pirogues traditionnelles malgaches, mettant en valeur l''habileté des navigateurs locaux.', '2023-08-08');

INSERT INTO event 
VALUES (null, 'Marché Artisanal', 'Un marché animé où les artisans malgaches présentent leurs créations, allant des sculptures en bois aux bijoux faits à la main.', '2023-08-09');


INSERT INTO event 
VALUES (null, 'Carnaval Malgache', 'Une célébration colorée avec des défilés, des danses, des costumes et de la musique, mettant en avant la diversité culturelle de Madagascar.', '2023-08-10');

INSERT INTO event 
VALUES (null, 'Excursion dans la Réserve de l''Isalo', 'Une aventure inoubliable à travers les canyons, les piscines naturelles et les formations rocheuses spectaculaires de la Réserve de l''Isalo.', '2023-08-11');

insert into post values(null,'Mlay kely le baleine','image_url','video_url','2023-08-14 18:12:00',1)