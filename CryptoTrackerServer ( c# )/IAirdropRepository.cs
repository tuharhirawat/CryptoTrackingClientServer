//namespace CryptoTrackingSystemDemo1
//{
//    public interface IAirdropRepository
//    {
//    }
//}


using CryptoTrackingSystemFinal1.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CryptoTrackingSystemFinal1.Repositories
{
    public interface IAirdropRepository
    {
        Task<IEnumerable<Airdrop>> GetAllAirdropsAsync();
        Task<Airdrop?> GetAirdropByIdAsync(int id);
        Task AddAirdropAsync(Airdrop airdrop);
        Task UpdateAirdropAsync(Airdrop airdrop);
        Task DeleteAirdropAsync(int id);
    }
}
