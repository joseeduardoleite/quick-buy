using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.ObjetoDeValor;

namespace QuickBuy.Repositorio.Config
{
    class FormaPagamentoConfiguration : IEntityTypeConfiguration<FormaPagamento>
    {
        public void Configure(EntityTypeBuilder<FormaPagamento> builder)
        {
            //throw new System.NotImplementedException();
            //builder.HasKey
        }
    }
}
