use CryptoTrackingClientServer

CREATE TABLE WishlistAirdrops (
    WishlistID INT IDENTITY(1,1) PRIMARY KEY, -- Unique identifier for each wishlist entry
    UserID INT NOT NULL, -- UserID from Users table
    AirdropID INT NOT NULL, -- AirdropID from Airdrop table
    AirdropName NVARCHAR(255) NOT NULL, -- Name of the airdrop
    AirdropLink NVARCHAR(MAX) NOT NULL, -- Website link of the airdrop
);


-- Insert a record for a user adding an airdrop to their wishlist
CREATE PROCEDURE InsertWishlistAirdrop
    @UserID INT,
    @AirdropID INT,
    @AirdropName NVARCHAR(255),
    @AirdropLink NVARCHAR(MAX)
AS
BEGIN
    INSERT INTO WishlistAirdrops (UserID, AirdropID, AirdropName, AirdropLink)
    VALUES (@UserID, @AirdropID, @AirdropName, @AirdropLink);
END;


--get all wishlist airdrops
CREATE PROCEDURE GetAllWishlistAirdrops
AS
BEGIN
    SELECT * 
    FROM WishlistAirdrops;
END;


----get all wishlist airdrops by uid 
CREATE PROCEDURE GetWishlistForUser
    @UserID INT
AS
BEGIN
    SELECT * 
    FROM WishlistAirdrops
    WHERE UserID = @UserID;
END;


--get all airdrops by airdrop id
CREATE PROCEDURE GetWishlistForAirdrop
    @AirdropID INT
AS
BEGIN
    SELECT * 
    FROM WishlistAirdrops
    WHERE AirdropID = @AirdropID;
END;

--update airdrop
CREATE PROCEDURE UpdateWishlistAirdrop
    @WishlistID INT,
    @AirdropName NVARCHAR(255),
    @AirdropLink NVARCHAR(MAX)
AS
BEGIN
    UPDATE WishlistAirdrops
    SET AirdropName = @AirdropName,
        AirdropLink = @AirdropLink
    WHERE WishlistID = @WishlistID;
END;


--delete airdrop
CREATE PROCEDURE DeleteWishlistAirdrop
    @WishlistID INT
AS
BEGIN
    DELETE FROM WishlistAirdrops
    WHERE WishlistID = @WishlistID;
END;


CREATE PROCEDURE DeleteWishlistForAirdrop
    @AirdropID INT
AS
BEGIN
    DELETE FROM WishlistAirdrops
    WHERE AirdropID = @AirdropID;
END;


CREATE PROCEDURE DeleteWishlistForUser
    @UserID INT
AS
BEGIN
    DELETE FROM WishlistAirdrops
    WHERE UserID = @UserID;
END;
