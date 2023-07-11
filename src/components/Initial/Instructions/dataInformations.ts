import Image01 from '../../../assets/imgLeadMore_1.png';
import Image02 from '../../../assets/imgLeadMore_2.png';
import Image03 from '../../../assets/imgLeadMore_3.png';
import Image04 from '../../../assets/imgLeadMore_4.png';
import { InfosProps } from '../../../@types/types';

export const infos: InfosProps[] = [
  {
    title: 'Ir ao mercado nunca foi tão prático!',
    image: Image01,
    readmore: `O Gevolg Market é um aplicativo criado com o objetivo de 
    facilitar e ajudar as pessoas durante suas compras no mercado. 
    \nEle permite organizar listas de compras, oferece dicas sobre o que comprar e como comprar, e armazena todas as suas listas para uso futuro.`,
  },
  {
    title: 'Crie e configure sua lista.',
    image: Image02,
    readmore: `Ao entrar no aplicativo, você encontrará um botão roxo chamado "Adicionar". Clique nele para criar a sua primeira lista.
    \n• Nome da lista: Dê um nome que faça sentido para a sua lista.
    \n• Prioridade: Defina a importância das compras dessa lista.
    \n• Cor: Adicione cores para categorizar ou personalizar a lista.`,
  },
  {
    title: 'Adicione um produto da sua compra.',
    image: Image03,
    readmore: `Abra a lista e comece a adicionar os produtos que você deseja comprar no mercado.
    \n• Nome: Insira o nome do produto.
    \n• Quantidade e referência: Indique a quantidade necessária em unidades, quilos ou gramas.
    \n• Categoria/Setor: Especifique em qual seção do mercado o produto pode ser encontrado.`,
  },
  {
    title: 'Interaja e organize os produtos.',
    image: Image04,
    readmore: `Com os produtos adicionados à sua lista de compras, você pode gerenciá-los da seguinte forma:
    \n• Arquivar: Caso você precise do produto na lista, mas não precise comprá-lo em um dia específico, você pode arquivá-lo e deixar apenas os itens que você comprará naquele dia.
    \n• Editar: Se você digitou algo errado ou mudou de ideia, basta editar o produto.
    \n• Excluir: Use essa opção para remover um produto da lista.`,
  },
]