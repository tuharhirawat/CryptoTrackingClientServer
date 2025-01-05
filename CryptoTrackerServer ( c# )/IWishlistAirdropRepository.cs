//namespace CryptoTrackingSystemFinal1
//{
//    public interface IWishlistAirdropRepository
//    {
//    }
//}



using CryptoTrackingSystemFinal1.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CryptoTrackingSystemFinal1.Interfaces
{
    public interface IWishlistAirdropRepository
    {
        Task<IEnumerable<WishlistAirdrop>> GetAllWishlistAirdropsAsync();
        Task<WishlistAirdrop> GetWishlistAirdropByIdAsync(int wishlistId);
        Task<IEnumerable<WishlistAirdrop>> GetWishlistByUserIdAsync(int userId);
        Task AddWishlistAirdropAsync(WishlistAirdrop wishlistAirdrop);
        Task UpdateWishlistAirdropAsync(WishlistAirdrop wishlistAirdrop);
        Task DeleteWishlistAirdropAsync(int wishlistId);
    }
}
