 // Array of band names
        let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Aerosmith'];

        // Function to remove articles and sort the array
        function sortBandNames(names) {
           // Function to remove articles from the beginning of band names
      function removeArticles(name) {
        return name.replace(/^(a|an|the)\s+/i, '');
      }

      // Sort the band names in lexicographic order (without articles)
      bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

      // Create a string of <li> elements containing the sorted band names
      const listItems = bandNames.map(name => `<li>${name}</li>`).join('');

      // Insert the list items into the <ul> element with id 'band'
      document.getElementById('band').innerHTML = listItems;
        }

        // Get the <ul> element by its id
        const ulElement = document.getElementById('band');

        // Sort the array and create <li> elements for each band name
        sortBandNames(bandNames).forEach(name => {
            const liElement = document.createElement('li');
            liElement.textContent = name;
            ulElement.appendChild(liElement);
        });