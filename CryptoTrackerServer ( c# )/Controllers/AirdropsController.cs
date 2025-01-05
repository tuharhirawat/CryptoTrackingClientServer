//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace CryptoTrackingSystemDemo1.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class AirdropsController : ControllerBase
//    {
//    }
//}







using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using CryptoTrackingSystemFinal1.Models;
using CryptoTrackingSystemFinal1.Repositories;

namespace CryptoTrackingSystemFinal1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AirdropsController : ControllerBase
    {
        private readonly IAirdropRepository _repository;

        public AirdropsController(IAirdropRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Airdrop>>> GetAllAirdrops()
        {
            var airdrops = await _repository.GetAllAirdropsAsync();
            return Ok(airdrops);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Airdrop>> GetAirdropById(int id)
        {
            var airdrop = await _repository.GetAirdropByIdAsync(id);
            if (airdrop == null)
                return NotFound();

            return Ok(airdrop);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAirdrop([FromBody] Airdrop airdrop)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _repository.AddAirdropAsync(airdrop);
            return CreatedAtAction(nameof(GetAirdropById), new { id = airdrop.AirdropId }, airdrop);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAirdrop(int id, [FromBody] Airdrop airdrop)
        {
            if (id != airdrop.AirdropId)
                return BadRequest();

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _repository.UpdateAirdropAsync(airdrop);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAirdrop(int id)
        {
            var airdrop = await _repository.GetAirdropByIdAsync(id);
            if (airdrop == null)
                return NotFound();

            await _repository.DeleteAirdropAsync(id);
            return NoContent();
        }
    }
}
