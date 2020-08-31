fetch('data.json')
    .then(response => response.json())
    .then(data => {
        var i;
        for( i = 0; i < data.length; i++) {
            console.log('id' + i)
            document.createElement('id'+ i);
            document.getElementById('id'+ i).innerHTML = '<br>Prenom:' + data[i].nom + '<br> Pseudo: ' + data[i].pseudo + '<br> Xp:' + data[i].xp + ('<br><img src="'+data[i].urlavatar+'"/><br>');
            // document.getElementById('id' + i).innerHTML = '<br>Prenom:' + data[i].nom + '<br> Pseudo: ' + data[i].pseudo + '<br> Xp:' + data[i].xp + ('<br><img src="'+data[i].urlavatar+'"/><br>');
            // document.getElementById('id' + i).innerHTML = '<br>Prenom:' + data[i].nom + '<br> Pseudo: ' + data[i].pseudo + '<br> Xp:' + data[i].xp + ('<br><img src="'+data[i].urlavatar+'"/><br>');
        }
    });
