function recupData(data) {
   const container = document.getElementById('HereQuiez')
   container.innerHTML = '';

   data.foreach(item => {
      const userDiv = document.createElement('div');
      userDiv.innerHTML = `<p>ID: ${item.quiz}</p><p>Nom: ${item.textes}</p>`;
      container.appendChild(userDiv);
   })
}
fetch('db.json')
   .then(response => {
      if (!response.ok) {
         throw new Error('Erreur dans la récupération du fichier JSON');
      }
      return response.json();
   })
   .then(data => {
      displayData(data);
   })
   .catch(error => {
      console.error('Erreur :', error);
   })