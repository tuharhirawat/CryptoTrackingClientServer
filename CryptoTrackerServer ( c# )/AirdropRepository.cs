//namespace CryptoTrackingSystemDemo1
//{
//    public class AirdropRepository
//    {
//    }
//}



using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CryptoTrackingSystemFinal1.Models;

namespace CryptoTrackingSystemFinal1.Repositories
{
    public class AirdropRepository : IAirdropRepository
    {
        private readonly CryptoTrackingClientServerContext _context;

        public AirdropRepository(CryptoTrackingClientServerContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Airdrop>> GetAllAirdropsAsync()
        {
            return await _context.Airdrops.ToListAsync();
        }

        public async Task<Airdrop?> GetAirdropByIdAsync(int id)
        {
            return await _context.Airdrops.FindAsync(id);
        }

        public async Task AddAirdropAsync(Airdrop airdrop)
        {
            await _context.Airdrops.AddAsync(airdrop);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAirdropAsync(Airdrop airdrop)
        {
            _context.Airdrops.Update(airdrop);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAirdropAsync(int id)
        {
            var airdrop = await _context.Airdrops.FindAsync(id);
            if (airdrop != null)
            {
                _context.Airdrops.Remove(airdrop);
                await _context.SaveChangesAsync();
            }
        }
    }
}
