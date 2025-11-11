const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 80;
const BACKEND_API_URL = process.env.BACKEND_API_URL || 'http://localhost:8080';

app.get('/', async (req, res) => {
  const apiBase = BACKEND_API_URL.replace(/\/$/, '');
  let comments = null;
  let errorMessage = null;

  try {
    const response = await axios.get(`${apiBase}/api/comments`, { timeout: 5000 });
    comments = response.data;
  } catch (error) {
    errorMessage = `No se pudo obtener datos desde ${apiBase}/api/comments: ${error.message}`;
  }

  const commentsHtml = comments
    ? `<pre>${JSON.stringify(comments, null, 2)}</pre>`
    : `<p>${errorMessage || 'Sin datos disponibles.'}</p>`;

  res.send(`<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8"/>
<title>Sistema de Comentarios</title>
<style>
body { font-family: Arial, sans-serif; margin: 40px; }
code { background: #f2f2f2; padding: 2px 4px; }
</style>
</head>
<body>
<h1>Frontend del Sistema de Comentarios</h1>
<p>Consumiendo API en: <code>${apiBase}</code></p>
<section>
<h2>Comentarios</h2>
${commentsHtml}
</section>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Frontend escuchando en puerto ${PORT}`);
});
