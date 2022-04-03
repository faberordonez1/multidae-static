class menuCenter extends HTMLElement{
    constructor(){
        super();
    }
    
    connectedCallback(){
      this.innerHTML =`<a href='index.html'>Home</a>
        |
        <a href="pages/login.html"
            >Login/Register</a
        >
        |
        <a
            href="pages/inlogin.html"
            >Toggle Security</a
        >
        |
        <a
            href="index.php?do=toggle-enforce-ssl&amp;page=/opt/lampp/htdocs/mutillidae-master/home.php"
            >Enforce TLS</a
        >
        |
        <a href="set-up-database.php"
            >Reset DB</a
        >
        |
        <a
            href="index.php?page=show-log.php"
            >View Log</a
        >
        |
        <a
            href="index.php?page=captured-data.php"
            >View Captured Data</a
        >`;
    }
}

window.customElements.define("menu-center", menuCenter)