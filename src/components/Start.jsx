import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../css/start.css";
export default function Start(props) {
  return (
    <Grid container alignItems="center" justify="center" align="center">
      <Grid item xs={12} className="start">
        <Typography variant="h4">
          Aby zaimplementować Reacta do naszego projektu mamy 2 możliwości:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">
          <br />
          1. Użycie menadżeru pakietów <i>npx</i>
        </Typography>
        <br />
        <Typography variant="h5">
          <br />
          2. Podpięcie konwertera języka JSX babel do naszego projektu. Czym
          jest JSX? dowiemy się wkrótce.
        </Typography>
        <Grid container className="zalety">
          <Grid item xs={6}>
            <Typography variant="h5" className="napis">
              Zalety opcji 1:
              <br />
            </Typography>
            <Typography variant="h6">
              +wygoda
              <br />
              + jeśli tworzymy aplikacje jednostronnicową
              <br />
              +łatwość użytkowania
              <br />
              -duża waga projektu
            </Typography>
          </Grid>

          <Grid item xs={6} className="font">
            <Typography variant="h5" className="napis">
              Zalety opcji 2:
            </Typography>
            <Typography variant="h6">
              +lekkość projektu
              <br />
              + jeśli tworzymy aplikacje wielostronnicową
              <br />
              -trudość w podpięciu
              <br />
              -większy poziom skomplikowania pracy
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" className="start2">
          Z racji podstawowego poziomu poradnika my użyjemy opcji 1.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">
          <br/>
          Krok 1: Uruchamiamy interpreter poleceń (z racji, że ja posiadam system Windows, jest to CMD (wiersz poleceń)).
          <br/>
          Krok 2: Wybieramy lokalizacje projektu. W moim przypadku będzie to pulpit.
          <br/>
          <img src="1.png" className="obrazek1" alt="1"/>
          <br/>
          Krok 3: W wybranej lokalizacji wpisujemy komende: <i>npx create-react-app nazwa_naszej_aplikacji</i>
          <br/>
          <img src="2.png" className="obrazek2" alt="1"/>
          <br/>
          Krok 4: Po udanej instalacji uruchamiamy projekt komendą wchodząc poleceniem do folderu <i>cd tssi </i>(w przypadku systemu Windows), a następnie uruchamiając ją komendą <i>npm run</i>
          <br/>
          <img src="3.png" className="obrazek3" alt="1"/>
          <br/>
          <br/>
          Jeśli wszystko poszło pomyślnie, powinna uruchomić się przeglądarka z powitalną stroną postawioną jako <i>localhost:3000</i>.
          <br/>
          <br/>
          <img src="4.png" className="obrazek4" alt="1"/>
          <br/>
          <Typography variant="h5" className="start2">
          Przejdźmy do omówienia języka JSX.
        </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}
