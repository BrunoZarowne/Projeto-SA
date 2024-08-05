// parte do modal //
let buttonLogin=document.getElementById('button_open_modal_login')
let modalLogin=document.getElementById('modal_login')
let fechaModalLogin=document.getElementById('fechaModal')

function abrirModalLogin()
{
modalLogin.showModal()

}
function fechamodalLogin(){

modalLogin.close()

}

let buttonOpenModal=document.getElementById('button_open_modal')
let modalCadastro=document.getElementById('modal_Cadastro')
let fechaModalCadastro=document.getElementById('fechaModalCadastro')

function abrirModalCadastro()
{
    modalCadastro.showModal()

}
function fechamodalCadastrO(){

modalCadastro.close()

}
// parte do modal //

//variaveis pro login//
let objEmailLogin = document.getElementById('loginEmail')
let objSenhaLogin = document.getElementById('loginSenha')

let posicaoUsuario

let usuarioLogado
//variaveis pro login//


//variaveis pro cadastro//
let objNomeCadastro = document.getElementById('nomeCadastro')
let objSenhaCadastro = document.getElementById('senhaCadastro')
let objEmailCadastro = document.getElementById('emailCadastro')
let objNascimentoCadastro = document.getElementById('dataNascimentoUsuario')
//variaveis pro cadastro//

let vetorUsernames = []
let vetorSenhas = []
let vetorEmail = []
let vetorDataNascimento = []

//Função Cadastrar
function cadastrar(){

    vetorUsernames = JSON.parse(localStorage.getItem('Usuarios-Salvos'))
    vetorSenhas = JSON.parse(localStorage.getItem('Senhas-Salvas'))
    vetorEmail = JSON.parse(localStorage.getItem('Emails-Salvos'))
    vetorDataNascimento = JSON.parse(localStorage.getItem('Datas-Salvas'))
    
    if(vetorUsernames == null){
    
        vetorUsernames = []
        vetorSenhas = []
        vetorEmail = []
        vetorDataNascimento = []
    
        confirmarCadastro()
    
    }else{
    
    confirmarCadastro()
    
    }
    function confirmarCadastro(){

    vetorUsernames.push(objNomeCadastro.value)
    vetorSenhas.push(objSenhaCadastro.value)
    vetorEmail.push(objEmailCadastro.value)
    vetorDataNascimento.push(objNascimentoCadastro.value)
    
    localStorage.setItem('Usuarios-Salvos', JSON.stringify(vetorUsernames))
    localStorage.setItem('Senhas-Salvas', JSON.stringify(vetorSenhas))
    localStorage.setItem('Emails-Salvos', JSON.stringify(vetorEmail))
    localStorage.setItem('Datas-Salvas', JSON.stringify(vetorDataNascimento))
    
    alert('Cadastro bem sucedido!')
    }
    }


    const linkPerfil = document.querySelectorAll("linkPerfilUsuario")
function logar(){
    //Função login
    vetorUsernames = JSON.parse(localStorage.getItem('Usuarios-Salvos'))
    vetorSenhas = JSON.parse(localStorage.getItem('Senhas-Salvas'))
    vetorEmail = JSON.parse(localStorage.getItem('Emails-Salvos'))
    vetorDataNascimento = JSON.parse(localStorage.getItem('Datas-Salvas'))
        
    posicaoUsuario = vetorEmail.indexOf(objEmailLogin.value)
        
    if(posicaoUsuario == -1){
        
        alert('Usuário inexistente')
        
    }else if(objEmailLogin.value == vetorEmail[posicaoUsuario] && objSenhaLogin.value == vetorSenhas[posicaoUsuario]){
        
        alert('Login bem sucedido')
        window.location.href = 'tela-usuario.html'
        usuarioLogado = vetorEmail[posicaoUsuario]
        localStorage.setItem('posicaoUsuario', JSON.stringify(posicaoUsuario))
        linkPerfil.href = 'http://127.0.0.1:5500/Projeto-SA/tela-usuario.html'
        
     }else{
        alert('Usuário ou senha estão incorretos')
    }
    }
    
    let objInptNomeUsuario = document.getElementById('inptNomeUsuario')
    let objInptEmailUsuario = document.getElementById('inptEmailUsuario')
    let objInptSenhaUsuario = document.getElementById('inptSenhaUsuario')
    let objInptNascimentoUsuario = document.getElementById('inptNascimentoUsuario')
    let objBoasvindasUsuario = document.getElementById('boasvindasUsuario')
    
    function AcessaPerfil(){
        
        // Traz o nome do usuário logado do localStorage
        usuarioLogado = JSON.parse(localStorage.getItem('Usuarios-Salvos'))
    
        // Usa o nome de usuário para dar uma saudação
        objBoasvindasUsuario.innerHTML = 'Boas Vindas ' + (usuarioLogado)
        
        // Traz o que tem no localStorage e armazena
        vetorUsernames = JSON.parse(localStorage.getItem('Usuarios-Salvos'))
        vetorSenhas = JSON.parse(localStorage.getItem('Senhas-Salvas'))
        vetorEmail = JSON.parse(localStorage.getItem('Emails-Salvos'))
        vetorDataNascimento = JSON.parse(localStorage.getItem('Datas-Salvas'))
    
        // Salva a posição do usuário no vetor
        posicaoUsuario = vetorUsernames.indexOf(usuarioLogado)
    
        // Joga os dados do usuário logado nos inputs do perfil
        objInptNomeUsuario.value = vetorUsernames[0]
        objInptEmailUsuario.value = vetorEmail[0]
        objInptSenhaUsuario.value = vetorSenhas[0]
        objInptNascimentoUsuario.value = vetorDataNascimento[0]
    
    }
    function boasVindas(){
        usuarioLogado = JSON.parse(localStorage.getItem('Usuarios-Salvos'))
        objBoasvindasUsuario.innerHTML = 'Boas Vindas ' + (usuarioLogado)
    }

    function excluirConta(){
        vetorUsernames.splice(posicaoUsuario, 1)
        vetorSenhas.splice(posicaoUsuario, 1)
        vetorEmail.splice(posicaoUsuario, 1)
        vetorDataNascimento.splice(posicaoUsuario, 1)
      
        // Remove user logado do localStorage
        localStorage.removeItem('Usuarios-Salvos')
      
        // Atualiza no localStorage
        localStorage.setItem('Usuarios-Salvos', JSON.stringify(vetorUsernames))
        localStorage.setItem('Senhas-Salvas', JSON.stringify(vetorSenhas))
        localStorage.setItem('Emails-Salvos', JSON.stringify(vetorEmail))
        localStorage.setItem('Datas-Salvas', JSON.stringify(vetorDataNascimento))
      
        // Mensagem de exclusão de conta
        alert('Sua conta será excluída! =~')
      }
function alterarSenha(){
    vetorSenhas[0] = objInptSenhaUsuario.value
    localStorage.setItem('Senhas-Salvas', JSON.stringify(vetorSenhas))
    alert('Senha alterada com sucesso')
}