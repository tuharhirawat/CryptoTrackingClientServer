use CryptoTrackingClientServer

drop table Airdrop

CREATE TABLE Airdrop (
    AirdropId INT IDENTITY(1,1) PRIMARY KEY,                     -- Unique identifier for each airdrop
    AirdropName NVARCHAR(255) NOT NULL UNIQUE,     -- Name of the airdrop
    TokenSymbol NVARCHAR(50) NOT NULL,      -- Token symbol (e.g., "NaN")
    AirdropWebsite NVARCHAR(MAX) NOT NULL ,  -- Website link of the airdrop
    SocialMediaRequirement NVARCHAR(10) NOT NULL, -- Indicates if social media tasks are required
    ReferralProgram NVARCHAR(10) NOT NULL,   -- Indicates if referral program is available
    FundRaised NVARCHAR(50),
	AirdropStatus NVARCHAR(15) NOT NULL,    -- Current status of the airdrop (e.g., "Active")
    Description NVARCHAR(MAX)               -- Detailed description of the airdrop
);




INSERT INTO Airdrop (AirdropName, TokenSymbol, AirdropWebsite, SocialMediaRequirement, ReferralProgram, AirdropStatus, Description)
VALUES
('BlockMesh Network Airdrop', 'NaN', 'https://app.blockmesh.xyz/register', 'True', 'True', 'Active',
 'Join the BlockMesh Network and receive free airdrop tokens. Participate by registering with your invite code, completing social media tasks, and referring friends to earn additional rewards.'),

('NodePay Airdrop', 'NaN', 'https://app.nodepay.ai/register', 'True', 'True', 'Active',
 'Participate in the NodePay Airdrop by registering through the invite link, completing social media tasks, and referring others to earn additional rewards. Get free tokens and be part of the NodePay ecosystem.'),

('Pipe Network Airdrop', 'NaN', 'https://pipecdn.app/signup?ref=dHVzaGFyaG', 'True', 'True', 'Active',
 'Join the NodePay Airdrop by signing up via the referral link, completing social media requirements, and inviting friends to earn rewards. Gain free tokens and expand your NodePay network.'),

('OasisAI Airdrop', 'NaN', 'https://r.distribute.ai/godhawkeye', 'True', 'True', 'Active',
 'Take part in the OasisAI Airdrop by signing up through the referral link, completing social media tasks, and referring others to earn tokens. Join OasisAI to unlock rewards and grow your network.'),

('KaisarNetwork Airdrop', 'NaN', 'https://zero.kaisar.io/register?ref=omfaPs346', 'True', 'True', 'Active',
 'Participate in the KaisarNetwork Airdrop by registering through the referral link, completing social media tasks, and referring friends. Unlock free tokens and enhance your participation in the KaisarNetwork community.'),

('Skyblock Airdrop', 'NaN', 'https://skyblock.io/register', 'True', 'True', 'Active',
 'Join the Skyblock Airdrop and receive free tokens by completing simple social media tasks. Refer friends to increase your earnings.'),

('CryptoX Airdrop', 'NaN', 'https://cryptox.com/register', 'True', 'True', 'Active',
 'Participate in CryptoX Airdrop, complete tasks, and refer friends to earn free tokens. Unlock rewards by joining the CryptoX community.');


 Select * from Airdrop

 
 --procedure to insert a new airdrop
 CREATE PROCEDURE InsertDefaultAirdrop
    @AirdropName NVARCHAR(255),
    @TokenSymbol NVARCHAR(50),
    @AirdropWebsite NVARCHAR(255),
    @SocialMediaRequirement NVARCHAR(5),
    @ReferralProgram NVARCHAR(5),
    @AirdropStatus NVARCHAR(50),
    @Description NVARCHAR(MAX)
AS
BEGIN
    INSERT INTO Airdrop (AirdropName, TokenSymbol, AirdropWebsite, SocialMediaRequirement, ReferralProgram, AirdropStatus, Description)
    VALUES (@AirdropName, @TokenSymbol, @AirdropWebsite, @SocialMediaRequirement, @ReferralProgram, @AirdropStatus, @Description);
END;


--procedure to get all airdrops
CREATE PROCEDURE GetAllDefaultAirdrops
AS
BEGIN
    SELECT * FROM Airdrop;
END;


--procedure to get airdrop by id
CREATE PROCEDURE GetDefaultAirdropByID
    @AirdropID INT
AS
BEGIN
    SELECT * FROM Airdrop
    WHERE AirdropId = @AirdropID;
END;


--procedure to upcdate particular airdrop by id 
CREATE PROCEDURE UpdateDefaultAirdrop
    @AirdropID INT,
    @AirdropName NVARCHAR(255),
    @TokenSymbol NVARCHAR(50),
    @AirdropWebsite NVARCHAR(255),
    @SocialMediaRequirement NVARCHAR(5),
    @ReferralProgram NVARCHAR(5),
    @AirdropStatus NVARCHAR(50),
    @Description NVARCHAR(MAX)
AS
BEGIN
    UPDATE Airdrop
    SET AirdropName = @AirdropName,
        TokenSymbol = @TokenSymbol,
        AirdropWebsite = @AirdropWebsite,
        SocialMediaRequirement = @SocialMediaRequirement,
        ReferralProgram = @ReferralProgram,
        AirdropStatus = @AirdropStatus,
        Description = @Description
    WHERE AirdropId = @AirdropID;
END;



----procedure to delete a user  by id
CREATE PROCEDURE DeleteDefaultAirdrop
    @AirdropID INT
AS
BEGIN
    DELETE FROM Airdrop
    WHERE AirdropId = @AirdropID;
END;




--testing the procedures
EXEC InsertDefaultAirdrop 
    @AirdropName = 'New Airdrop ', 
    @TokenSymbol = 'XYZ', 
    @AirdropWebsite = 'https://example.com', 
    @SocialMediaRequirement = 'True', 
    @ReferralProgram = 'True', 
    @AirdropStatus = 'Active', 
    @Description = 'Description of the new airdrop.';


EXEC GetAllDefaultAirdrops;

EXEC GetDefaultAirdropByID @AirdropID = 1;

EXEC UpdateDefaultAirdrop 
    @AirdropID = 8, 
    @AirdropName = 'Updated Airdrop', 
    @TokenSymbol = 'ABC', 
    @AirdropWebsite = 'https://updated.com', 
    @SocialMediaRequirement = 'False', 
    @ReferralProgram = 'True', 
    @AirdropStatus = 'Inactive', 
    @Description = 'Updated description for the airdrop.';

EXEC DeleteDefaultAirdrop @AirdropID = 8;

