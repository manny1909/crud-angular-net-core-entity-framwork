using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend
{
    public class AplicationDBContext : DbContext
    {
        public DbSet<Tarjeta_credito> Tarjeta_creditos { get; set; }
        public AplicationDBContext(DbContextOptions<AplicationDBContext> options): base(options)
        {

        }
    }
}
