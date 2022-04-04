class menuCenter extends HTMLElement{
    constructor(){
        super();
    }
    
    connectedCallback(){
        let menuHome = `<a href='index.html'>Home</a>|
        <a href="pages/login.html">Login/Register</a>|
        <a href="pages/inlogin.html">Toggle Security</a>|
        <a href="home.html">Enforce TLS</a>|
        <a href="set-up-database.html">Reset DB</a>|
        <a href="show-log.html">View Log</a>|
        <a href="index.php?page=captured-data.php">View Captured Data</a>`;

        let menuOthers =  `<a href='../index.html'>Home</a>|
        <a href="login.html">Login/Register</a>|
        <a href="login.html">Toggle Security</a>|
        <a href="home.html">Enforce TLS</a>|
        <a href="set-up-database.html">Reset DB</a>|
        <a href="show-log.html">View Log</a>|
        <a href="captured-data.html">View Captured Data</a>`


        var rutaAbsoluta = self.location.href;   
		var posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
		var rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
        
        rutaRelativa ==='index.html'? this.innerHTML = menuHome : this.innerHTML = menuOthers;
        
    }
}

window.customElements.define("menu-center", menuCenter)