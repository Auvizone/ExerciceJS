fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('id1').innerHTML = '<br>Prenom:' + data[0].nom + '<br> Pseudo: ' + data[0].pseudo + '<br> Xp:' + data[0].xp + ('<br><img src="'+data[0].urlavatar+'"/><br>');
        document.getElementById('id2').innerHTML = '<br>Prenom:' + data[1].nom + '<br> Pseudo: ' + data[1].pseudo + '<br> Xp:' + data[1].xp + ('<br><img src="'+data[1].urlavatar+'"/><br>');
        document.getElementById('id3').innerHTML = '<br>Prenom:' + data[2].nom + '<br> Pseudo: ' + data[2].pseudo + '<br> Xp:' + data[2].xp + ('<br><img src="'+data[2].urlavatar+'"/><br>');
    });
