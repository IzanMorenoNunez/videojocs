document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault()
    const formData = {
      nombre: document.getElementById('nombre').value,
      email: document.getElementById('email').value,
      asunto: document.getElementById('asunto').value,
      mensaje: document.getElementById('mensaje').value,
      api_token: "pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS"
    }
    try {
      const response = await fetch('https://phpstack-1076337-5399863.cloudwaysapps.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        alert('Missatge enviat correctament!');
        document.getElementById('contact-form').reset();
      } else {
        alert('Error en enviar el missatge. Torna-ho a intentar.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hi ha hagut un problema en enviar el missatge.');
    }
  });