// place files you want to import through the `$lib` alias in this folder.
// Interface para os dados de bebidas
export default interface Bebida {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    volume: number;
    estoque: number;
    created_at: Date;
    updated_at: Date;
  }
  
  // Interface para os dados de alimentos
  export default interface Alimento {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    quantidade: number;
    estoque: number;
    created_at: Date;
    updated_at: Date;
  }
  
  // Interface para os dados de clientes
  export default interface Cliente {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    created_at: Date;
    updated_at: Date;
  }
  
  // Interface para os dados de vendas
  export default interface Venda {
    id: number;
    cliente_id: number;
    data: Date;
    itens: string[]; // Assumindo que 'itens' seja uma lista de itens
    total: number;
    created_at: Date;
    updated_at: Date;
  }
  
  // Interface para os dados de promoções
  export default interface Promocao {
    id: number;
    descricao: string;
    data_inicio: Date;
    data_fim: Date;
    desconto: number;
    created_at: Date;
    updated_at: Date;
  }
  
  // Interface para os dados de funcionários
  export default interface Funcionario {
    id: number;
    nome: string;
    cargo: string;
    email: string;
    telefone: string;
    data_admissao: Date;
    created_at: Date;
    updated_at: Date;
  }
  