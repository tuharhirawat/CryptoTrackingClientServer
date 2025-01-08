//using CryptoTrackingSystemDemo1.Models;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;

//namespace CryptoTrackingSystemDemo1.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class UsersController : ControllerBase
//    {
//        private readonly IUserRepository _userRepository;

//        public UsersController(IUserRepository userRepository)
//        {
//            _userRepository = userRepository;
//        }

//        [HttpGet]
//        public async Task<IActionResult> GetAllUsers()
//        {
//            return Ok(await _userRepository.GetAllUsersAsync());
//        }

//        [HttpGet("{id}")]
//        public async Task<IActionResult> GetUserById(int id)
//        {
//            var user = await _userRepository.GetUserByIdAsync(id);
//            if (user == null) return NotFound();
//            return Ok(user);
//        }

//        [HttpPost]
//        public async Task<IActionResult> AddUser(User user)
//        {
//            var createdUser = await _userRepository.AddUserAsync(user);
//            return CreatedAtAction(nameof(GetUserById), new { id = createdUser.Id }, createdUser);
//        }

//        [HttpPut("{id}")]
//        public async Task<IActionResult> UpdateUser(int id, User user)
//        {
//            if (id != user.Id) return BadRequest();

//            var updatedUser = await _userRepository.UpdateUserAsync(user);
//            return Ok(updatedUser);
//        }

//        [HttpDelete("{id}")]
//        public async Task<IActionResult> DeleteUser(int id)
//        {
//            var result = await _userRepository.DeleteUserAsync(id);
//            if (!result) return NotFound();
//            return NoContent();
//        }
//    }

//}













using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using CryptoTrackingSystemFinal1.Models;
// using BCrypt.Net;

namespace CryptoTrackingSystemFinal1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok(await _userRepository.GetAllUsersAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _userRepository.GetUserByIdAsync(id);
            if (user == null) return NotFound();
            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> AddUser(User user)
        {
            // user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);

            var createdUser = await _userRepository.AddUserAsync(user);
            return CreatedAtAction(nameof(GetUserById), new { id = createdUser.Id }, createdUser);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, User user)
        {
            if (id != user.Id) return BadRequest();

            // if (!string.IsNullOrEmpty(user.Password))
            // {
            //     user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
            // }

            var updatedUser = await _userRepository.UpdateUserAsync(user);
            return Ok(updatedUser);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var result = await _userRepository.DeleteUserAsync(id);
            if (!result) return NotFound();
            return NoContent();
        }
    }
}
