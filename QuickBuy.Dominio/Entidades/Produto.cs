namespace QuickBuy.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public string NomeArquivo { get; set; }

        public override void Validate()
        {
            //if (Id == 0)
            //    AdicionarCritica("O Id não foi informado");

            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("O Nome não foi informado");

            if (string.IsNullOrEmpty(Descricao))
                AdicionarCritica("A Descrição não foi informada");

            if (Preco == 0)
                AdicionarCritica("O Preço não foi informado");
        }
    }
}
