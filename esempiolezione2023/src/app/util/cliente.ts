export interface Cliente{
  id:number,
  cognome:string,
  nome: string,
  tessera:string
}

export class ClienteImp implements Cliente{
  public id:number
  public cognome:string
  public nome:string
  public tessera:string

  constructor(){
    this.id=0
    this.cognome= ''
    this.nome = ''
    this.tessera = ''
  }

  copy(c:Cliente) : ClienteImp{
    this.id= c.id
    this.cognome = c.cognome
    this.nome = c.nome
    this.tessera = c.tessera
    return this
  }
}

export const clientiarray: Cliente[] = [
  {
      "id": 1,
      "cognome": "Rossi",
      "nome": "Mario",
      "tessera": "1234"
  },
  {
      "id": 2,
      "cognome": "Pippo",
      "nome": "Mario",
      "tessera": "1235"
  },
  {
      "id": 3,
      "cognome": "Pippo",
      "nome": "Mario",
      "tessera": "1235"
  },
  {
      "id": 4,
      "cognome": "Pippo",
      "nome": "Mario",
      "tessera": "1235"
  },
  {
      "id": 52,
      "cognome": "Rossi",
      "nome": "Mario",
      "tessera": "1234"
  },
  {
      "id": 102,
      "cognome": "Rossi",
      "nome": "Mario",
      "tessera": "1234"
  }
]
