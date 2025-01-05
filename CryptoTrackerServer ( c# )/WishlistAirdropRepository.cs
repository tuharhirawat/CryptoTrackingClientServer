//namespace CryptoTrackingSystemFinal1
//{
//    public class WishlistAirdropRepository
//    {
//    }
//}





using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CryptoTrackingSystemFinal1.Interfaces;
using CryptoTrackingSystemFinal1.Models;
using Microsoft.EntityFrameworkCore;

namespace CryptoTrackingSystemFinal1.Repositories
{
    public class WishlistAirdropRepository : IWishlistAirdropRepository
    {
        private readonly CryptoTrackingClientServerContext _context;

        public WishlistAirdropRepository(CryptoTrackingClientServerContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<WishlistAirdrop>> GetAllWishlistAirdropsAsync()
        {
            return await _context.WishlistAirdrops.ToListAsync();
        }

        public async Task<WishlistAirdrop> GetWishlistAirdropByIdAsync(int wishlistId)
        {
            return await _context.WishlistAirdrops.FindAsync(wishlistId);
        }

        public async Task<IEnumerable<WishlistAirdrop>> GetWishlistByUserIdAsync(int userId)
        {
            return await _context.WishlistAirdrops
                .Where(w => w.UserId == userId)
                .ToListAsync();
        }

        public async Task AddWishlistAirdropAsync(WishlistAirdrop wishlistAirdrop)
        {
            await _context.WishlistAirdrops.AddAsync(wishlistAirdrop);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateWishlistAirdropAsync(WishlistAirdrop wishlistAirdrop)
        {
            _context.WishlistAirdrops.Update(wishlistAirdrop);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteWishlistAirdropAsync(int wishlistId)
        {
            var wishlistAirdrop = await _context.WishlistAirdrops.FindAsync(wishlistId);
            if (wishlistAirdrop != null)
            {
                _context.WishlistAirdrops.Remove(wishlistAirdrop);
                await _context.SaveChangesAsync();
            }
        }
    }
}
