using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Tarjeta_credito
    {
        public int Id { get; set; }
        [Required] //con dataAnnotations por medio de [Required,Key, etc.] se puede configurar el campo para que no sea nulo, para que sea primary key o foraign 
        public string Titular { get; set; }
        [Required]
        public string Numero_Tarjeta { get; set; }
        [Required]
        public string Fecha_Expiracion { get; set; }
        [Required]
        public string CVV { get; set; }
    }
}
