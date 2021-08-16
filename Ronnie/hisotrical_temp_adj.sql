DROP TABLE IF EXISTS HISTORICAL_TEMP;

CREATE TABLE HISTORICAL_TEMP (
	ID INT,
	min_temp DECIMAL,
	max_temp DECIMAL,
	avg_temp DECIMAL,
	year INT,
	month CHAR(10),
	country CHAR(100),
	abbr CHAR(10)
);

SELECT * FROM HISTORICAL_TEMP;

DELETE FROM HISTORICAL_TEMP
	WHERE YEAR < 1980;
	
SELECT * FROM HISTORICAL_TEMP;


SELECT * FROM HISTORICAL_TEMP

SELECT
	YEAR,
	COUNTRY,
	ROUND(AVG(MIN_TEMP),2) AS MIN_TEMP,
	ROUND(AVG(MAX_TEMP),2) AS MAX_TEMP,
	ROUND(AVG(AVG_TEMP),2) AS AVG_TEMP,
	ABBR
FROM
	HISTORICAL_TEMP
GROUP BY
	YEAR,
	COUNTRY,
	ABBR
ORDER BY YEAR ASC
;
	
SELECT * FROM HISTORICAL_TEMP





UPDATE NEW_TEMP_TABLE
SET REGION = 'Africa'
WHERE COUNTRY IN ('Algeria',
				  'Angola',
				  'Benin',
				  'Botswana',
				  'Burkina Faso',
				  'Burundi',
				  'Cameroon',
				  'Cape Verde',
				  'Central African Republic',
				  'Chad',
				  'Comoros',
				  'Cote d''Ivoire',
				  'Democratic Republic of the Congo',
				  'Djibouti',
				  'Egypt',
				  'Equatorial Guinea',
				  'Eritrea',
				  'Ethiopia',
				  'Gabon',
				  'Gambia',
				  'Ghana',
				  'Guinea',
				  'Guinea-Bissau',
				  'Kenya',
				  'Lesotho',
				  'Liberia',
				  'Libya',
				  'Madagascar',
				  'Malawi',
				  'Mali',
				  'Mauritania',
				  'Mauritius',
				  'Morocco',
				  'Mozambique',
				  'Namibia',
				  'Niger',
				  'Nigeria',
				  'Republic of the Congo',
				  'Reunion',
				  'Rwanda',
				  'Saint Helena',
				  'Sao Tome and Principe',
				  'Senegal',
				  'Seychelles',
				  'Sierra Leone',
				  'Somalia',
				  'South Africa',
				  'South Sudan',
				  'Sudan',
				  'Swaziland',
				  'Tanzania',
				  'Togo',
				  'Tunisia',
				  'Uganda',
				  'Western Sahara',
				  'Zambia',
				  'Zimbabwe');
					

UPDATE NEW_TEMP_TABLE
SET REGION = 'Asia'
WHERE COUNTRY IN ('Afghanistan',
				  'Armenia',
				  'Azerbaijan',
				  'Bahrain',
				  'Bangladesh',
				  'Bhutan',
				  'Brunei',
				  'Burma',
				  'Cambodia',
				  'China',
				  'Cyprus',
				  'East Timor',
				  'Georgia',
				  'Hong Kong',
				  'India',
				  'Indonesia',
				  'Iran',
				  'Iraq',
				  'Israel',
				  'Japan',
				  'Jordan',
				  'Kazakhstan',
				  'Kuwait',
				  'Kyrgyzstan',
				  'Laos',
				  'Lebanon',
				  'Macau',
				  'Malaysia',
				  'Maldives',
				  'Mongolia',
				  'Nepal',
				  'North Korea',
				  'Oman',
				  'Pakistan',
				  'Philippines',
				  'Qatar',
				  'Saudi Arabia',
				  'Singapore',
				  'South Korea',
				  'Sri Lanka',
				  'Syria',
				  'Taiwan',
				  'Tajikistan',
				  'Thailand',
				  'Turkey',
				  'Turkmenistan',
				  'United Arab Emirates',
				  'Uzbekistan',
				  'Vietnam',
				  'Yemen');
				  
UPDATE NEW_TEMP_TABLE
SET REGION = 'Caribbean'
WHERE COUNTRY IN ('Anguilla',
				  'Antigua and Barbuda',
				  'Aruba',
				  'The Bahamas',
				  'Barbados',
				  'Bermuda',
				  'British Virgin Islands',
				  'Cayman Islands',
				  'Cuba',
				  'Dominica',
				  'Dominican Republic',
				  'Grenada',
				  'Guadeloupe',
				  'Haiti',
				  'Jamaica',
				  'Martinique',
				  'Montserrat',
				  'Netherlands Antilles',
				  'Puerto Rico',
				  'St. Kitts and Nevis',
				  'St. Lucia',
				  'St. Vincent and the Grenadines',
				  'Trinidad and Tobago',
				  'Turks and Caicos Islands',
				  'U.S. Virgin Islands');		
				  
				  
UPDATE NEW_TEMP_TABLE
SET REGION = 'Central America'
WHERE COUNTRY IN ('Belize',
				  'Costa Rica',
				  'El Salvador',
				  'Guatemala',
				  'Honduras',
				  'Nicaragua',
				  'Panama');	
				  
UPDATE NEW_TEMP_TABLE
SET REGION = 'Europe'
WHERE COUNTRY IN ('Albania',
				  'Andorra',
				  'Austria',
				  'Belarus',
				  'Belgium',
				  'Bosnia and Herzegovina',
				  'Bulgaria',
				  'Croatia',
				  'Czech Republic',
				  'Denmark',
				  'Estonia',
				  'Finland',
				  'France',
				  'Germany',
				  'Gibraltar',
				  'Greece',
				  'Holy See',
				  'Hungary',
				  'Iceland',
				  'Ireland',
				  'Italy',
				  'Kosovo',
				  'Latvia',
				  'Liechtenstein',
				  'Lithuania',
				  'Luxembourg',
				  'Macedonia',
				  'Malta',
				  'Moldova',
				  'Monaco',
				  'Montenegro',
				  'Netherlands',
				  'Norway',
				  'Poland',
				  'Portugal',
				  'Romania',
				  'Russia',
				  'San Marino',
				  'Slovak Republic',
				  'Slovenia',
				  'Spain',
				  'Serbia',
				  'Serbia and Montenegro',
				  'Sweden',
				  'Switzerland',
				  'Ukraine',
				  'the United Kingdom');	
				  
UPDATE NEW_TEMP_TABLE
SET REGION = 'North America'
WHERE COUNTRY IN ('Canada',
				  'Greenland',
				  'Mexico',
				  'Saint Pierre and Miquelon',
				  'United States');
				  
				  
UPDATE NEW_TEMP_TABLE
SET REGION = 'Oceania'
WHERE COUNTRY IN ('American Samoa',
				  'Australia',
				  'Christmas Island',
				  'Cocos (Keeling) Islands',
				  'Cook Islands',
				  'Federated States of Micronesia',
				  'Fiji',
				  'French Polynesia',
				  'Guam',
				  'Kiribati',
				  'Marshall Islands',
				  'Nauru',
				  'New Caledonia',
				  'New Zealand',
				  'Niue',
				  'Northern Mariana Islands',
				  'Palau',
				  'Papua New Guinea',
				  'Pitcairn Islands',
				  'Samoa',
				  'Solomon Islands',
				  'Tokelau',
				  'Tonga',
				  'Tuvalu',
				  'Vanuatu',
				  'Wallis and Futuna Islands');	
				  
UPDATE NEW_TEMP_TABLE
SET REGION = 'South America'
WHERE COUNTRY IN ('Argentina',
				  'Bolivia',
				  'Brazil',
				  'Chile',
				  'Colombia',
				  'Ecuador',
				  'Falkland Islands',
				  'French Guiana', 
				  'Guyana',
				  'Paraguay',
				  'Peru',
				  'Suriname',
				  'Uruguay',
				  'Venezuela');.
				  
SELECT * FROM NEW_TEMP_TABLE

ALTER TABLE NEW_TEMP_TABLE
ADD COLUMN REGION VARCHAR