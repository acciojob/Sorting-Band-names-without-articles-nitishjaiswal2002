 // Array of band names
        let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Aerosmith'];

        // Function to remove articles and sort the array
        function sortBandNames(names) {
            return names.sort((a, b) => {
                const articles = /^(the|an|a)\s/i; // Regular expression to match articles
                const nameA = a.replace(articles, '').toLowerCase();
                const nameB = b.replace(articles, '').toLowerCase();
                return nameA.localeCompare(nameB);
            });
        }

        // Get the <ul> element by its id
        const ulElement = document.getElementById('band');

        // Sort the array and create <li> elements for each band name
        sortBandNames(bandNames).forEach(name => {
            const liElement = document.createElement('li');
            liElement.textContent = name;
            ulElement.appendChild(liElement);
        });