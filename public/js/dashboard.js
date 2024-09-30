var i = 0;

function abrir() {

    var menuLateral = document.getElementById('menu-lateral');
    var dashboardLogo = document.getElementsByClassName('material-symbols-outlined');
    var menu = document.getElementById('menu');
    var dash = document.getElementById('dashboard-logo');
    var markChatUnread = document.getElementById('mark_chat_unread');
    var uploadFile = document.getElementById('upload_file');
    var notificationsActive = document.getElementById('notifications_active');
    var help = document.getElementById('help');
    var fundoInfos = document.querySelector('.fundo-infos');
    var isOpen = menuLateral.style.width === '450px';
    menuLateral.style.width = isOpen ? '5vw' : '450px';
    menuLateral.style.position = isOpen ? 'relative' : 'absolute';
    fundoInfos.style.filter = isOpen ? 'none' : 'blur(5px)';
    fundoInfos.style.zIndex = isOpen ? '0' : '-100';
    fundoInfos.style.marginLeft = isOpen ? '0px' : '5vw';

    for (var i = 0; i < dashboardLogo.length; i++) {
        dashboardLogo[i].style.textAlign = isOpen ? 'center' : 'start';
        dashboardLogo[i].style.paddingLeft = isOpen ? '0' : '15px';
        dashboardLogo[i].style.display = isOpen ? '' : 'flex';
        dashboardLogo[i].style.alignItems = isOpen ? '' : 'center';
        dashboardLogo[i].style.gap = isOpen ? '' : '30px';
    }

    if (!isOpen) {

        var fechar = document.createElement('span');
        var dashText = document.createElement('span');
        var markChatUnreadText = document.createElement('span');
        var uploadFileText = document.createElement('span');
        var notificationsActiveText = document.createElement('span');
        var helpText = document.createElement('span');

        fechar.innerText = 'Fechar';
        dashText.innerText = 'Gráficos';
        markChatUnreadText.innerText = 'Chat';
        uploadFileText.innerText = "Upload de BD's";
        notificationsActiveText.innerText = 'Notificações';
        helpText.innerText = 'Ajuda';

        fechar.style.fontFamily = 'Godoto';
        dashText.style.fontFamily = 'Godoto';
        markChatUnreadText.style.fontFamily = 'Godoto';
        uploadFileText.style.fontFamily = 'Godoto';
        notificationsActiveText.style.fontFamily = 'Godoto';
        helpText.style.fontFamily = 'Godoto';

        fechar.style.fontSize = '25px';
        dashText.style.fontSize = '25px';
        markChatUnreadText.style.fontSize = '25px';
        uploadFileText.style.fontSize = '25px';
        notificationsActiveText.style.fontSize = '25px';
        helpText.style.fontSize = '25px';

        dashText.style.display = 'flex';
        fechar.style.display = 'flex';
        markChatUnreadText.style.display = 'flex';
        uploadFileText.style.display = 'flex';
        notificationsActiveText.style.display = 'flex';
        helpText.style.display = 'flex';

        fechar.style.justifyContent = 'center';
        fechar.style.alignItems = 'center';
        dashText.style.justifyContent = 'center';
        dashText.style.alignItems = 'center';
        markChatUnreadText.style.justifyContent = 'center';
        markChatUnreadText.style.alignItems = 'center';
        uploadFileText.style.justifyContent = 'center';
        uploadFileText.style.alignItems = 'center';
        notificationsActiveText.style.justifyContent = 'center';
        notificationsActiveText.style.alignItems = 'center';
        helpText.style.justifyContent = 'center';
        helpText.style.alignItems = 'center';

        menu.innerHTML = 'menu ' + fechar.outerHTML;
        dash.innerHTML = 'bar_chart ' + dashText.outerHTML;
        markChatUnread.innerHTML = 'mark_chat_unread ' + markChatUnreadText.outerHTML;
        uploadFile.innerHTML = 'upload_file ' + uploadFileText.outerHTML;
        notificationsActive.innerHTML = 'notifications_active ' + notificationsActiveText.outerHTML;
        help.innerHTML = 'help ' + helpText.outerHTML;

        menuLateral.style.backgroundColor = '#15202e';

    } else {
        menu.innerHTML = 'menu';
        dash.innerHTML = 'bar_chart';
        markChatUnread.innerHTML = 'mark_chat_unread';
        uploadFile.innerHTML = 'upload_file';
        notificationsActive.innerHTML = 'notifications_active';
        help.innerHTML = 'help';
    }
}