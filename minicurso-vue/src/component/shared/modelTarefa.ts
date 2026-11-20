export interface tarefa{
    id: number,
    titutlo: string, 
    status: 'Em atraso' | 'Abeto' | 'Fechado'
    descricao: string,
    dataFechamento: string | null
    responsavelId: number
    responsavel: string

}