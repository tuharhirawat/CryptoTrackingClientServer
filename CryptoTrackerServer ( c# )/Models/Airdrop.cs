using System;
using System.Collections.Generic;

namespace CryptoTrackingSystemFinal1.Models
{
    public partial class Airdrop
    {
        public int AirdropId { get; set; }
        public string AirdropName { get; set; } = null!;
        public string TokenSymbol { get; set; } = null!;
        public string AirdropWebsite { get; set; } = null!;
        public string SocialMediaRequirement { get; set; } = null!;
        public string ReferralProgram { get; set; } = null!;
        public string AirdropStatus { get; set; } = null!;
        public string? Description { get; set; }
    }
}
