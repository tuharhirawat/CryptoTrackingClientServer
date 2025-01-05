use CryptoTrackingClientServer


-- Create the users table
CREATE TABLE users (
    id INT IDENTITY PRIMARY KEY, -- Auto-increment primary key
    username NVARCHAR(255) NOT NULL,
    mobile_number NVARCHAR(15) NOT NULL UNIQUE, -- Unique constraint for mobile numbers
    email NVARCHAR(255) NOT NULL UNIQUE, -- Unique constraint for emails
    password NVARCHAR(255) NOT NULL -- Store passwords as hashed strings (not plain text)
);



INSERT INTO users (username, mobile_number, email, password) VALUES
('JohnDoe', '1234567890', 'john.doe@example.com', 'password123'),
('JaneSmith', '2345678901', 'jane.smith@example.com', 'pass456'),
('AliceWonder', '3456789012', 'alice.wonder@example.com', 'alicePwd789'),
('BobMarley', '4567890123', 'bob.marley@example.com', 'marley321'),
('CharlieBrown', '5678901234', 'charlie.brown@example.com', 'charlie@123'),
('EveAdams', '6789012345', 'eve.adams@example.com', 'eve456789'),
('FrankCastle', '7890123456', 'frank.castle@example.com', 'punisher2023'),
('GraceHopper', '8901234567', 'grace.hopper@example.com', 'gracePwd@123'),
('HankPym', '9012345678', 'hank.pym@example.com', 'antman_2023'),
('IvyLee', '0123456789', 'ivy.lee@example.com', 'ivySecurePwd');

SELECT * FROM users;


--Procedure to add a user
CREATE PROCEDURE CreateUser
    @username NVARCHAR(50),
    @mobile_number NVARCHAR(15),
    @email NVARCHAR(100),
    @password NVARCHAR(255)
AS
BEGIN
    INSERT INTO users (username, mobile_number, email, password)
    VALUES (@username, @mobile_number, @email, @password);
END;


--testing adding a new user procedure
EXEC CreateUser @username = 'NewUser', @mobile_number = '9876543210', @email = 'new.user@example.com', @password = 'newUserPass';


--procedure to get all users
CREATE PROCEDURE GetAllUsers
AS
BEGIN
    SELECT * FROM users;
END;

--testing the procedure GetallUsers 
exec GetAllUsers


--procedure to get user details by id 
CREATE PROCEDURE GetUserById
    @id INT
AS
BEGIN
    SELECT * FROM users WHERE id = @id;
END;


--testing the procedure to get a user by id 
EXEC GetUserById @id = 1;



--procedure to update a user by id
CREATE PROCEDURE UpdateUser
    @id INT,
    @username NVARCHAR(50),
    @mobile_number NVARCHAR(15),
    @email NVARCHAR(100),
    @password NVARCHAR(255)
AS
BEGIN
    UPDATE users
    SET 
        username = @username,
        mobile_number = @mobile_number,
        email = @email,
        password = @password
    WHERE id = @id;
END;


--testing the procedure to update the user by id
EXEC UpdateUser @id = 11, @username = 'UpdatedUser', @mobile_number = '1112223334', @email = 'updated.user@example.com', @password = 'updatedPass';



--procedure to delete a user by id 
CREATE PROCEDURE DeleteUser
    @id INT
AS
BEGIN
    DELETE FROM users WHERE id = @id;
END;



--testing the procedure to delete a user by id 
EXEC DeleteUser @id = 11;


exec GetAllUsers




drop proc CreateUser
drop proc DeleteUser
drop proc UpdateUser
drop proc GetAllUsers
drop proc GetUserById