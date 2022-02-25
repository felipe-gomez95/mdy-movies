import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { apiKey } from "../../Utils/tmdbKey";

function LoginPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const request_token = searchParams.get("request_token");

  async function getAutorization() {
    const response = await fetch(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`
    );

    const data = await response.json();
    const requestToken = data.request_token;
    window.location.replace(
      `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/login`
    );
  }

  async function getSesionId() {
    if (request_token) {
      const response = await fetch(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}`,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            request_token: request_token,
          }),
        }
      );

      const data = await response.json();
      // const sessionId = data.session_id;
      // localStorage.setItem("sessionId", sessionId);
      // no es posible obtener una respuesta esperada del servidor, en response hay un estado:0
    }
  }

  useEffect(getSesionId, [request_token]);

  return request_token ? (
    "tu cuenta se ha sincronizado exitosamente"
  ) : (
    <section>
      <h1>Login</h1>
      <p>
        para crear una sesion es necesario primero aprobar la solicutud de
        autenticación de terceros en la pagina de TMDB.
      </p>
      <button onClick={getAutorization}>Ir a la pagina</button>
    </section>
  );
}

export default LoginPage;
