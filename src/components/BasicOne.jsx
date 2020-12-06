import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import "../css/jsx.css";
export default function Start(props) {
  return (
    <Grid container alignItems="center" justify="center" align="center">
      <Grid item xs={12} className="jsx">
        <Typography variant="h4"> Z czym się je JSX?</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              JSX
            </Typography>

            <Typography component="p" variant="h6">
              React używa własnego języka znaczników - JSX, który stanowi
              rozszerzenie języka JS przy pomocy składni przypominającej XML.
              Nie jest to jednak ani XML, ani HTML, a co więcej znaczniki te nie
              są w żaden sposób interpretowane przez przeglądarkę - stanowią one
              jedynie ułatwienie dla developerów przy pracy z React. Jeżeli nie
              podoba nam się "umieszczanie HTML w JS" istnieje wiele alternatyw
              jak react-hyperscript czy też pisanie własnoręcznie wygenerowanego
              kodu.
            </Typography>
            <br />
            <hr />
            <br />
            <Typography component="p" variant="h6">
              Język JSX umożliwia nam tworzenia własnych ,,komponentów" (własny
              znacznik HTML - skrót myślowy), które mogą być dowolnie
              wieloktrotnie używane w kodzie jak i używanie standardowych
              znacnzików HTML. Oprócz tego możemy dowolnie zdefiniować własną
              logikę działania komponentów używając JS'a i wystylować je
              używając CSS.
            </Typography>
            <br />
            <hr />
            <Typography component="p" variant="h6">
              Poniżej w przykładzie zadeklarujemy zmienną <i>klasa</i>, a
              następnie użyjemy ją otaczając nawiasami wąsatymi (aby wskazać
              JSX, że korzystamy z JS):
            </Typography>
            <img src="5.png" className="obrazek5" alt="1"></img>
            <Typography component="p" variant="h6">
              Poniżej w przykładzie wywołamy wynik funkcji JS'owej:
            </Typography>
            <img src="6.png" className="obrazek6" alt="1"></img>
            <hr />
            <Typography component="p" variant="h6" alt="1">
              <b>JSX reprezentuje obiekty</b> pamiętaj, towrząc swoje znaczniki,
              zawsze powinny zwracać obiekt:
            </Typography>
            <img src="7.png" className="obrazek7" alt="1"></img>
          </CardContent>
        </Card>
        <Grid item xs={12} className="jsx">
          <Typography variant="h4"> Używanie CSS</Typography>
        </Grid>
        <br />
        <br/>
        <br/>
        <Typography variant="h5">Mamy 3 wyjścia</Typography>
        <Grid container spacing={0} className="zalety">
          <Grid item xs={4}>
          <Typography component="p" variant="h6">
            Dodawając bezpośrednio używając atrybutu <i>style</i>
            <br/>
            <br/>
            <img src="8.png" className="obrazek8" alt="1"></img></Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography component="p" variant="h6">
            Importując plik .css w sposób obiektowy
            <br/>
            <br/>
            <img src="9.png" className="obrazek9" alt="1"></img></Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography component="p" variant="h6">
            Wykorzystując opcje jezyka JSX przez zdefiniowanie stylów jako obiekt
            <br/>
            <br/>
            <img src="10.png" className="obrazek10" alt="1"></img></Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}


<h1 style={{color: "red"}}>CSS bogiem HTML nałogiem!</h1>