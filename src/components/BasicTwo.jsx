import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../css/komponent.css";
export default function Start(props) {
  return (
    <Grid container alignItems="center" justify="center" align="center">
      <Grid item xs={12} className="komponent">
        <Typography variant="h4">Nawigacja po projekcie</Typography>
      </Grid>
      <Typography component="p" variant="h5">
        <br />W drzewku folderów możemy zobaczyć folder <i>public</i> oraz{" "}
        <i>src</i>. W pierwszym z nich znjduje się plik publiczne jak wszystkie
        użyte obrazki oraz plik <i>index.html</i>, w którym renderowana jest
        nasza aplikacja.
        <br />
        <br />W folderze <i>src</i> są wszystkie polecenia. W pliku{" "}
        <i>index.js</i> renderowany jest komponet<i>App</i>, który jest
        komponentem ,,matką" zawierającym w sobie wszystkie komponenty
        ,,dzieci". Sam komponent <i>App</i> renderowany jest przez kompilator w
        body, w elemenecie o id <i>root</i>. Napiszmy jakiś komponent pamiętając
        o stworzeniu pliku w <i>src</i>, oraz dodając rozszerzenie <i>.jsx</i>{" "}
        B-)
      </Typography>
      <Grid item xs={12} className="komponent">
        <Typography variant="h4">
          {" "}
          Tworzenie komponentów na 2 sposoby:
        </Typography>
      </Grid>
      <Grid container alignItems="center" justify="center" align="center">
        <Grid item xs={6}>
          <Typography component="p" variant="h5">
            <br />
            Komponenty klasowe
          </Typography>
          <img src="11.png" alt="1"/>
        </Grid>
        <Grid item xs={6}>
          <Typography component="p" variant="h5">
            <br />
            Komponenty funkcyjne
          </Typography>
          <img src="12.png" alt="1"/>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography component="p" variant="h5">
          <br />
          My wybierzemy prace z komponentem klasowym
          <br />
          Napiszmy komponent, którym będzie prosty licznik
          <br />
          <br />
          Stórzmy plik <i>Licznik.jsx</i>, który wygląda następująco:
        </Typography>
        <img src="13.png" alt="1"/>
      </Grid>
      <Grid item xs={12}>
        <Typography component="p" variant="h5">
          <br />
          Teraz zaimportujmy nasz komponent Licznik do komponentu ,,matki" -{" "}
          <i>App</i> i go tam wywołajmy
        </Typography>
        <img src="14.png" alt="1"/>
      </Grid>
      <Grid item xs={12} className="komponent">
        <Typography variant="h4">Stan aplikacji</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography component="p" variant="h5">
          <br />
          Stan aplikacji to miejsce, w którym przechowujemy różnego rodzaju informacje na temat aplikacji. Na podstawie tych danych React renderuje aplikację
          <br/>
          <br/>
          Dodaj konstruktor klasy i zainicjalizuj w nim pole <i>this.state</i>
          <br/>
          Napisz funkcję aktuualizującą stan za pomocą <i>setState</i>
          <br/>
          Dodaj do przycisku zdarzenie <i>onClick</i>
        </Typography>
        <img src="15.png" alt="1"/>
      </Grid>
    </Grid>
  );
}
