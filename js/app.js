let totalGeral;
limpar()

function adicionar()
{
    //recuperar valores: nome do produto, qtd e preço
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; //pega o value do produto e separa com o split, antes do - é nome
    let valorUnidade = produto.split('R$')[1]; //split no R$ para pegar o preço, usando 1 justamente para ser depois do $
    let quantidadeProduto = document.getElementById('quantidade').value;

    //cacular o preço, o subtotal por produto
    let preco = quantidadeProduto * valorUnidade;

    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

  //atualizar o valor total 
  totalGeral = totalGeral + preco
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`
  document.getElementById('quantidade').value = 1; //dentro da função para que sempre que apertar em adicionar, a qtd zerar
}
//nao pode criar dentro da funcao adicionar pois iria zerar o total geral sempre que adiconasse algo ao carrinho

function limpar()
{
    //zerar os campos dos produtos e o valor do carrinho
    totalGeral = 0;
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('lista-produtos').textContent = '';
}