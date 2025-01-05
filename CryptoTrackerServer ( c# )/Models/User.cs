using System;
using System.Collections.Generic;

namespace CryptoTrackingSystemFinal1.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = null!;
        public string MobileNumber { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
    }
}
