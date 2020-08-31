fetch('data.json')
    .then(response => response.json())
    .then(data => {
        var i;
        for( i = 0; i < data.length; i++) {
            var iDiv = document.createElement('div');
            iDiv.id = ('id'+ i);
            document.getElementById('body').appendChild(iDiv);
            document.getElementById('id'+ i).innerHTML = '<br>Prenom:' + data[i].nom 
            + '<br> Pseudo: ' + data[i].pseudo 
            + '<br> Xp:' + data[i].xp 
            + ('<br><img src="'+ data[i].urlAvatar+'"/><br>');

            var iButton = document.createElement('button');
            iButton.id = ('idButton' + i);
            var textButton = document.createTextNode('Sélectionner');
            iButton.appendChild(textButton);
            document.getElementById('body').appendChild(iButton);
            
            selectionner = () => {
                console.log(i)
                console.log(data);
                // let nom = data[i].nom;
            };

            var boutonAjouter = document.getElementById('idButton' + i).addEventListener('click', selectionner)
        }
    });
