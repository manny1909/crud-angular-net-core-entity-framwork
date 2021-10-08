using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class tarjetaController : ControllerBase
    {
        private readonly AplicationDBContext _context;
        public tarjetaController(AplicationDBContext context)
        {
            _context = context;
        }
        // GET: api/<tarjetaController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var lista_Tarjetas = await _context.Tarjeta_creditos.ToListAsync();
                return Ok(lista_Tarjetas);
            }
            catch (Exception e)
            {
               return BadRequest(e.Message);
            }
        }

        
        // POST api/<tarjetaController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Tarjeta_credito tarjeta)
        {
            try
            {
                _context.Add(tarjeta);
                await _context.SaveChangesAsync();
                return Ok(tarjeta);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // PUT api/<tarjetaController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Tarjeta_credito tarjeta)
        {
            try
            {
                if (id != tarjeta.Id)
                {
                    return NotFound();
                }
                _context.Update(tarjeta);
                await _context.SaveChangesAsync();
                return Ok(new { message = "La tarjeta fue actualizada con exito!" });   
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        // DELETE api/<tarjetaController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var tarjeta = await _context.Tarjeta_creditos.FindAsync(id);
                if (tarjeta == null)
                {
                    return NotFound();
                }
                _context.Tarjeta_creditos.Remove(tarjeta);
                await _context.SaveChangesAsync();
                return Ok(new { message = "La tarjeta fue eliminada con exito" });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
