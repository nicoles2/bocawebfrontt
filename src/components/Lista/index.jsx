export const Lista=({Lista})=>{
    return(
       
        <div className="lista">
           
            {Lista.map((oda)=>{
                return(
                <div className="objeto" key={oda._id}>
                    <h1>Nome: {oda.nome}</h1>
                    <p>Usuário: {oda.usuario}</p>
                    <p>Descrição: {oda.descricao}</p>
                    <p>Data de inclusão: {oda.data_inclusao}</p>
                    <p>Palavra chave: {oda.palavra_chave}</p>
                </div>
                )    
            })}
        </div>
        
    )
}