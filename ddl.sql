CREATE TABLE post(
	unq int unsigned not null auto_increment,
 	title varchar(200) not null,
	content tinytext,
	name varchar(20),
	created_at datetime not null default now(),
	hits int unsigned default '0',
	primary key(unq)
)

CREATE TABLE reply(
	reply_no int unsigned not null auto_increment,
	unq int unsigned not null,
	comment varchar(255),
	name varchar(20),
	created_at datetime not null default now(),
	primary key(reply_no)
)

ALTER TABLE `post` DROP `name`;
