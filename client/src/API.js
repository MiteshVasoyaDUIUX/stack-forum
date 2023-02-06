if (window.location.hostname === 'localhost') {
    var API_URL =  'http://localhost:3000';
  }

  export async function isAdmin() {
    const response = await fetch(`http://localhost:3000/auth/isAdmin`, {
      mode:'no-cors'
    });
    return response.json();
  }