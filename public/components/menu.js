class SidebarMenu extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
          <div class="menu-lateral" id="menu-lateral">
              <span class="material-symbols-outlined" onclick="abrir()" id="menu">
                  menu
              </span>
              <span class="material-symbols-outlined dashboard-logo" id="dashboard-logo">
                  bar_chart
              </span>
              <span class="material-symbols-outlined" id="mark_chat_unread">
                  mark_chat_unread
              </span>
              <span class="material-symbols-outlined" id="upload_file">
                  upload_file
              </span>
              <span class="material-symbols-outlined" id="notifications_active">
                  notifications_active
              </span>
              <span class="material-symbols-outlined" id="help">
                  help
              </span>
          </div>`;
    }
  }
  customElements.define('sidebar-menu', SidebarMenu);

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
    var isOpen = menuLateral.style.width === '270px';
    menuLateral.style.width = isOpen ? '5vw' : '270px';
    menuLateral.style.position = isOpen ? 'relative' : 'relative';
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

        fechar.style.fontFamily = '"Roboto", sans-serif';
        dashText.style.fontFamily = '"Roboto", sans-serif';
        markChatUnreadText.style.fontFamily = '"Roboto", sans-serif';
        uploadFileText.style.fontFamily = '"Roboto", sans-serif';
        notificationsActiveText.style.fontFamily = '"Roboto", sans-serif';
        helpText.style.fontFamily = '"Roboto", sans-serif';

        fechar.style.fontSize = '20px';
        dashText.style.fontSize = '20px';
        markChatUnreadText.style.fontSize = '20px';
        uploadFileText.style.fontSize = '20px';
        notificationsActiveText.style.fontSize = '20px';
        helpText.style.fontSize = '20px';

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