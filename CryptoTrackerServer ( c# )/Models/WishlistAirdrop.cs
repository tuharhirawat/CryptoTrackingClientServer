using System;
using System.Collections.Generic;

namespace CryptoTrackingSystemFinal1.Models
{
    public partial class WishlistAirdrop
    {
        public int WishlistId { get; set; }
        public int UserId { get; set; }
        public int AirdropId { get; set; }
        public string AirdropName { get; set; } = null!;
        public string AirdropLink { get; set; } = null!;
    }
}
