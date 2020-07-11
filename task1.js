fetch('https://api.alquran.cloud/v1/surah/2/ayahs?limit=5') 
    
    // Converting received data to JSON 
    .then(response => response.json()) 
    .then(arab => 
    fetch('http://api.alquran.cloud/v1/surah/2/id.indonesian')
    .then((response) => response.json())
    .then(indo =>
    { 
   
        // Create a variable to store HTML 
        let ayah= '';
        
        // Loop through each data
        for(let i = 0; i<5; i++){
            ayah += `<br>
            <div id='arab'>(${arab.data.ayahs[i].numberInSurah})   ${arab.data.ayahs[i].text}</div> <br>
            <div id='indo'>${indo.data.ayahs[i].text}</div> <br>`
        ;} 
        
        // Display result 
        document.getElementById('ayah').innerHTML = ayah; 
    })); 