//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace CryptoTrackingSystemFinal1.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class WishlistAirdropController : ControllerBase
//    {
//    }
//}




using System.Collections.Generic;
using System.Threading.Tasks;
using CryptoTrackingSystemFinal1.Interfaces;
using CryptoTrackingSystemFinal1.Models;
using Microsoft.AspNetCore.Mvc;

namespace CryptoTrackingSystemFinal1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishlistAirdropController : ControllerBase
    {
        private readonly IWishlistAirdropRepository _repository;

        public WishlistAirdropController(IWishlistAirdropRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<WishlistAirdrop>>> GetAllWishlistAirdrops()
        {
            return Ok(await _repository.GetAllWishlistAirdropsAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<WishlistAirdrop>> GetWishlistAirdropById(int id)
        {
            var result = await _repository.GetWishlistAirdropByIdAsync(id);
            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<WishlistAirdrop>>> GetWishlistByUserId(int userId)
        {
            return Ok(await _repository.GetWishlistByUserIdAsync(userId));
        }

        [HttpPost]
        public async Task<ActionResult> AddWishlistAirdrop(WishlistAirdrop wishlistAirdrop)
        {
            await _repository.AddWishlistAirdropAsync(wishlistAirdrop);
            return CreatedAtAction(nameof(GetWishlistAirdropById), new { id = wishlistAirdrop.WishlistId }, wishlistAirdrop);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateWishlistAirdrop(int id, WishlistAirdrop wishlistAirdrop)
        {
            if (id != wishlistAirdrop.WishlistId)
            {
                return BadRequest();
            }
            await _repository.UpdateWishlistAirdropAsync(wishlistAirdrop);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteWishlistAirdrop(int id)
        {
            await _repository.DeleteWishlistAirdropAsync(id);
            return NoContent();
        }
    }
}
