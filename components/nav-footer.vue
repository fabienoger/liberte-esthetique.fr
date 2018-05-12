<template>

  <footer class="footer-distributed">

  <div class="footer-left">

    <h3>Liberté<span>Esthétique</span></h3>

    <p class="footer-links">
      <nuxt-link to="/">Accueil</nuxt-link>
      ·
      <nuxt-link to="/tarifs">Tarifs</nuxt-link>
      ·
      <nuxt-link to="/contact">Contact</nuxt-link>
    </p>
    <p class="footer-company-name">Liberté Esthétique &copy; 2017</p>
  </div>
  <div class="footer-center">
    <div>
      <i class="fa fa-map-marker"></i>

      <p><span>30 Ter Rue de la Liberté</span> 94300 Vincennes, France</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p><a href="tel:0177015158">01 77 01 51 58</a></p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p>
        <a href="mailto:liberte.esthetique@gmail.com">
          liberte.esthetique@gmail.com
        </a>
      </p>
    </div>
  </div>
  <div class="footer-right">
    <p class="footer-company-about">
      <span>A propos</span>
        Liberté esthétique, c'est avant tout vous comprendre pour agir avec efficacité.
        Soins du corps et du visage, Anti âge, Amincissement, Traitement de la cellulite et du relâchement.
        Sur tout type de peau, quelque soit votre âge.
        Relaxation et recentrage d'énergie sont aussi nécessaires pour votre bien être.
        Afin d'agir avec efficacité, notre équipe spécialisée est à votre écoute pour comprendre et analyser vos demandes.
        A l'aide de nos différents modules haut de gamme, certifiés CE médical 2017, nous trouverons la solution la mieux adaptée à vos attentes.
    </p>
    <div class="footer-icons">
        <a href="#" target="_blank">
          <Icon type="social-twitter"></Icon>
        </a>
        <a href="#" target="_blank">
          <Icon type="social-facebook"></Icon>
        </a>
        <a href="https://github.com/fabienoger/liberte-esthetique.fr" target="_blank">
          <Icon type="social-github"></Icon>
        </a>
    </div>
  </div>
</footer>

</template>

<style lang="scss" scoped>
@import "~assets/css/variables.scss";

.footer-distributed {
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;

  padding: 55px 50px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left {
  width: 40%;
}

/* The company logo */

.footer-distributed h3 {
  color: #ffffff;
  margin: 0;
}

.footer-distributed h3 span {
  color: $primary-color;
}

/* Footer links */

.footer-distributed .footer-links {
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 0;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  color: $primary-color;
  text-decoration: none;
}

/* Footer Right */

.footer-distributed .footer-right {
  width: 20%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 1.1em;
  font-weight: normal;
  margin: 0;
  text-align: justify;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;

  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }

  .footer-distributed .footer-center i {
    margin-left: 0;
  }
}
</style>
