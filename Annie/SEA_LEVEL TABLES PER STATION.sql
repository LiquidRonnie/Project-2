-- DROP TABLE Clearwater_Beach_FL;

-- CREATE TABLE Clearwater_Beach_FL (
-- 	Station_ID VARCHAR,
-- 	YEAR INT,
-- 	MONTH INT,
-- 	Monthly_MSL DECIMAL(3,3),
-- 	Linear_Trend DECIMAL(3,3),
-- 	High_Conf DECIMAL(3,3),
-- 	Low_Conf DECIMAL(3,3)
-- );

-- SELECT * FROM Clearwater_Beach_FL
--  	WHERE YEAR BETWEEN 1980 AND 2020
	
-- SELECT * FROM Clearwater_Beach_FL

-- ALTER TABLE Clearwater_Beach_FL 
-- 	DROP COLUMN Linear_Trend,
-- 	DROP COLUMN High_Conf,
-- 	DROP COLUMN Low_Conf
-- ;


-- SELECT * FROM Clearwater_Beach_FL


-- SELECT YEAR, Station_ID, Month, Monthly_MSL FROM Honolulu_HI
-- UNION
-- SELECT YEAR, Station_ID, Month, Monthly_MSL FROM Dauphin_Island_AL
-- UNION
-- SELECT YEAR, Station_ID, Month, Monthly_MSL FROM Clearwater_Beach_FL
-- UNION
-- SELECT YEAR, Station_ID, Month, Monthly_MSL FROM Lewisetta_VA
-- UNION
-- SELECT YEAR, Station_ID, Month, Monthly_MSL FROM Pulaski_GA
-- UNION
-- SELECT YEAR, Station_ID, Month, Monthly_MSL FROM Rockport_TX
-- UNION
-- SELECT YEAR, Station_ID, Month, Monthly_MSL FROM San_Diego_CA
-- UNION
-- SELECT YEAR, Station_ID, Month, Monthly_MSL FROM Seavy_Island_ME
-- UNION
-- SELECT YEAR, Station_ID, Month, Monthly_MSL FROM South_Beach_OR
-- UNION
-- SELECT YEAR, Station_ID, Month, Monthly_MSL FROM Waveland_MS

-- ORDER BY 1,3