
// Inputs da Tela de Cadastro
let elementoInputCadastroUser = document.getElementById('inptCadastroUsername')
let elementoInputCadastroPass = document.getElementById('inptCadastroPassword')
let elementoInputCadastroEmail = document.getElementById('inptCadastroEmail')

// Inputs da Tela de Login
let elementoInputLoginUser = document.getElementById('inptLoginUsername')
let elementoInputLoginPass = document.getElementById('inptLoginPassword')

// Elementos da Tela de Perfil
let elementoLabelPerfil = document.getElementById('labelPerfil')
let elementoInputPerfilUser = document.getElementById('inptPerfilUsername')
let elementoInputPerfilPass = document.getElementById('inptPerfilPassword')
let elementoInputPerfilEmail = document.getElementById('inptPerfilEmail')


// Vetores para os Dados dos Usuários
let vetorUsernames = []
let vetorPasswords = []
let vetorEmails = []

// Variável para armazenar a posição do usuário no vetor
let posicaoUser

// Variável para armazenar o usuário logado
let userLogado

// Função para Cadastro de Usuário 
function Cadastra(){

    // Traz o que tem no localStorage e armazena
    vetorUsernames = JSON.parse(localStorage.getItem('UserSalvos'))
    vetorPasswords = JSON.parse(localStorage.getItem('PassSalvos'))
    vetorEmails = JSON.parse(localStorage.getItem('EmailsSalvos'))
    
    // Verifica se o que veio do localStorage é nulo
    if(vetorUsernames == null){

        // Refaz o formato de vetor
        vetorUsernames = []
        vetorPasswords = []
        vetorEmails = []

        // Chama função de confirma cadastro
        ConfirmaCadastro()

    }else{

        // Chama função de confirma cadastro
        ConfirmaCadastro()

    }

}

function ConfirmaCadastro(){

    // Joga os dados dos inputs para os vetores
    vetorUsernames.push(elementoInputCadastroUser.value)
    vetorPasswords.push(elementoInputCadastroPass.value)
    vetorEmails.push(elementoInputCadastroEmail.value)
 
    // Salva os vetores no localStorage
    localStorage.setItem('UserSalvos', JSON.stringify(vetorUsernames))
    localStorage.setItem('PassSalvos', JSON.stringify(vetorPasswords))
    localStorage.setItem('EmailsSalvos', JSON.stringify(vetorEmails))
 
    // Avisa o usuário que o cadastro deu certo
    alert('Cadastro DEU BOM! :D')
    
}


// Função para Login de Usuário 
function Loga(){

    // Traz o que tem no localStorage e armazena
    vetorUsernames = JSON.parse(localStorage.getItem('UserSalvos'))
    vetorPasswords = JSON.parse(localStorage.getItem('PassSalvos'))
    vetorEmails = JSON.parse(localStorage.getItem('EmailsSalvos'))

    // Salva a posição do usuário caso ele exista no vetor
    posicaoUser = vetorUsernames.indexOf(elementoInputLoginUser.value)

    // Caso não exista
    if(posicaoUser == -1){

        // Aviso de usuário inexistente
        alert('Usuário inexistente!')

    // Caso exista
    }else{

        // Compara dados dos inputs com os dados do usuário no vetor
        if(elementoInputLoginUser.value == vetorUsernames[posicaoUser] && elementoInputLoginPass.value == vetorPasswords[posicaoUser]){

            // Aviso de login correto
            alert('Login deu certo! :D')

            // Troca para a tela de perfil
            window.location.href = 'perfil.html'

            // Salva o usuário logado na variável
            userLogado = vetorUsernames[posicaoUser]

            // Cria no localStorage uma chave com o usuário logado
            localStorage.setItem('UserLogado', JSON.stringify(userLogado))

        }else{

            // Aviso de dados incorretos
            alert('Dados não conferem!')

        }

    }

}

// Função para puxar dados do usuário logado para a tela de perfil
function AcessaPerfil(){

    // Traz o nome do usuário logado do localStorage
    userLogado = JSON.parse(localStorage.getItem('UserLogado'))

    // Usa o nome de usuário para dar uma saudação
    elementoLabelPerfil.innerHTML = `Oi, ${userLogado}. Esse é o seu perfil! :D`
    
    // Traz o que tem no localStorage e armazena
    vetorUsernames = JSON.parse(localStorage.getItem('UserSalvos'))
    vetorPasswords = JSON.parse(localStorage.getItem('PassSalvos'))
    vetorEmails = JSON.parse(localStorage.getItem('EmailsSalvos'))

    // Salva a posição do usuário no vetor
    posicaoUser = vetorUsernames.indexOf(userLogado)

    // Joga os dados do usuário logado nos inputs do perfil
    elementoInputPerfilUser.value = vetorUsernames[posicaoUser]
    elementoInputPerfilPass.value = vetorPasswords[posicaoUser]
    elementoInputPerfilEmail.value = vetorEmails[posicaoUser]

}

// Função para excluir conta do usuário logado
function Exclui(){

    // Exclui o usuário e seus dados dos vetores
    vetorUsernames.splice(posicaoUser, 1)
    vetorPasswords.splice(posicaoUser, 1)
    vetorEmails.splice(posicaoUser, 1)

    // Remove user logado do localStorage
    localStorage.removeItem('UserLogado')
  
    // Atualiza no localStorage
    localStorage.setItem('UserSalvos', JSON.stringify(vetorUsernames))
    localStorage.setItem('PassSalvos', JSON.stringify(vetorPasswords))
    localStorage.setItem('EmailsSalvos', JSON.stringify(vetorEmails))

    // Mensagem de exclusão de conta
    alert('Sua conta será excluída! =~')

    // Troca para a tela de perfil
    window.location.href = 'cadastro.html'

}

// Função para editar dados do usuário logado
function Edita(){

    // Atualiza os dados que estão nos inputs para os vetores
    // O dado "username" não é possível alterar pois é o dado chave da conta
    vetorPasswords[posicaoUser] = elementoInputPerfilPass.value
    vetorEmails[posicaoUser] = elementoInputPerfilEmail.value
  
    // Atualiza no localStorage
    localStorage.setItem('PassSalvos', JSON.stringify(vetorPasswords))
    localStorage.setItem('EmailsSalvos', JSON.stringify(vetorEmails))

    // Mensagem de edição de dados
    alert('Dados Editados! =D')

}

// Função para deslogar da conta do usuário
function Desloga(){

    // Remove user logado do localStorage
    localStorage.removeItem('UserLogado')

    // Mensagem de exclusão de conta
    alert('Você vai sair da sua conta!')

    // Troca para a tela de perfil
    window.location.href = 'cadastro.html'

}
