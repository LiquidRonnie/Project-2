-- drop table min_temps;
-- drop table max_temps;
-- drop table average_temps;
-- drop table historical_temps;

-- CREATE TABLE min_temps (
-- 	id SERIAL PRIMARY KEY,
-- 	min_temp FLOAT,
-- 	year INT,
-- 	month VARCHAR (20),
-- 	country VARCHAR (33),
-- 	abbrev VARCHAR (4)
-- );

-- CREATE TABLE max_temps (
-- 	id SERIAL PRIMARY KEY,
-- 	max_temp FLOAT,
-- 	year INT,
-- 	month VARCHAR (20),
-- 	country VARCHAR (33),
-- 	abbrev VARCHAR (4)
-- );

-- CREATE TABLE average_temps (
-- 	id SERIAL PRIMARY KEY,
-- 	average_temp FLOAT,
-- 	year INT,
-- 	month VARCHAR (20),
-- 	country VARCHAR (33),
-- 	abbrev VARCHAR (4)
-- );

-- UPDATE min_temps
-- SET month = 'January'
-- WHERE month = ' Jan Average';

-- UPDATE min_temps
-- SET month = 'February'
-- WHERE month = ' Feb Average';

-- UPDATE min_temps
-- SET month = 'March'
-- WHERE month = ' Mar Average';

-- UPDATE min_temps
-- SET month = 'April'
-- WHERE month = ' Apr Average';

-- UPDATE min_temps
-- SET month = 'May'
-- WHERE month = ' May Average';

-- UPDATE min_temps
-- SET month = 'June'
-- WHERE month = ' Jun Average';

-- UPDATE min_temps
-- SET month = 'July'
-- WHERE month = ' Jul Average';

-- UPDATE min_temps
-- SET month = 'August'
-- WHERE month = ' Aug Average';

-- UPDATE min_temps
-- SET month = 'September'
-- WHERE month = ' Sep Average';

-- UPDATE min_temps
-- SET month = 'October'
-- WHERE month = ' Oct Average';

-- UPDATE min_temps
-- SET month = 'November'
-- WHERE month = ' Nov Average';

-- UPDATE min_temps
-- SET month = 'December'
-- WHERE month = ' Dec Average';

-- UPDATE max_temps
-- SET month = 'January'
-- WHERE month = ' Jan Average';

-- UPDATE max_temps
-- SET month = 'February'
-- WHERE month = ' Feb Average';

-- UPDATE max_temps
-- SET month = 'March'
-- WHERE month = ' Mar Average';

-- UPDATE max_temps
-- SET month = 'April'
-- WHERE month = ' Apr Average';

-- UPDATE max_temps
-- SET month = 'May'
-- WHERE month = ' May Average';

-- UPDATE max_temps
-- SET month = 'June'
-- WHERE month = ' Jun Average';

-- UPDATE max_temps
-- SET month = 'July'
-- WHERE month = ' Jul Average';

-- UPDATE max_temps
-- SET month = 'August'
-- WHERE month = ' Aug Average';

-- UPDATE max_temps
-- SET month = 'September'
-- WHERE month = ' Sep Average';

-- UPDATE max_temps
-- SET month = 'October'
-- WHERE month = ' Oct Average';

-- UPDATE max_temps
-- SET month = 'November'
-- WHERE month = ' Nov Average';

-- UPDATE max_temps
-- SET month = 'December'
-- WHERE month = ' Dec Average';

-- UPDATE average_temps
-- SET month = 'January'
-- WHERE month = ' Jan Average';

-- UPDATE average_temps
-- SET month = 'February'
-- WHERE month = ' Feb Average';

-- UPDATE average_temps
-- SET month = 'March'
-- WHERE month = ' Mar Average';

-- UPDATE average_temps
-- SET month = 'April'
-- WHERE month = ' Apr Average';

-- UPDATE average_temps
-- SET month = 'May'
-- WHERE month = ' May Average';

-- UPDATE average_temps
-- SET month = 'June'
-- WHERE month = ' Jun Average';

-- UPDATE average_temps
-- SET month = 'July'
-- WHERE month = ' Jul Average';

-- UPDATE average_temps
-- SET month = 'August'
-- WHERE month = ' Aug Average';

-- UPDATE average_temps
-- SET month = 'September'
-- WHERE month = ' Sep Average';

-- UPDATE average_temps
-- SET month = 'October'
-- WHERE month = ' Oct Average';

-- UPDATE average_temps
-- SET month = 'November'
-- WHERE month = ' Nov Average';

-- UPDATE average_temps
-- SET month = 'December'
-- WHERE month = ' Dec Average';

-- update min_temps set country = trim(country);
-- update min_temps set abbrev = trim(abbrev);
-- update max_temps set country = trim(country);
-- update max_temps set abbrev = trim(abbrev);
-- update average_temps set country = trim(country);
-- update average_temps set abbrev = trim(abbrev);

-- select min_temps.id, min_temps.min_temp, max_temps.max_temp, average_temps.average_temp, min_temps.year, min_temps.month, min_temps.country, min_temps.abbrev
-- from ((min_temps
-- inner join max_temps on min_temps.id = max_temps.id)
-- inner join average_temps on min_temps.id = average_temps.id)
-- order by id asc;

-- CREATE TABLE historical_temps (
-- 	id SERIAL PRIMARY KEY,
-- 	min_temp FLOAT,
-- 	max_temp FLOAT,
-- 	average_temp FLOAT,
-- 	year INT,
-- 	month VARCHAR (20),
-- 	country VARCHAR (33),
-- 	abbrev VARCHAR (4)
-- );

select * from historical_temps