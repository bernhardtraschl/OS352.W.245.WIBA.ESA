    <script> 

        console.log("JavaScript geladen!"); 

                 // Funktion zur Erstellung einer Melodie
        function playMelody() {
            const context = new (window.AudioContext || window.webkitAudioContext)();

            const notes = [
                { frequency: 392.00, duration: 0.5 }, // G4
                { frequency: 392.00, duration: 0.5 }, // G4
                { frequency: 440.00, duration: 0.5 }, // A4
                { frequency: 392.00, duration: 0.5 }, // G4
                { frequency: 349.23, duration: 0.5 }, // F4
                { frequency: 329.63, duration: 0.5 }, // E4
                { frequency: 392.00, duration: 0.5 }, // G4
                { frequency: 392.00, duration: 0.5 }, // G4
                { frequency: 440.00, duration: 0.5 }, // A4
                { frequency: 392.00, duration: 0.5 }, // G4
                { frequency: 440.00, duration: 0.5 }, // A4
                { frequency: 392.00, duration: 0.5 }, // G4
            ];

            let currentTime = context.currentTime;

            notes.forEach(note => {
                const oscillator = context.createOscillator();
                const gainNode = context.createGain();

                oscillator.type = 'sine'; // Klangart
                oscillator.frequency.setValueAtTime(note.frequency, currentTime);
                oscillator.connect(gainNode);
                gainNode.connect(context.destination);

                // Lautstärke langsam ein- und ausblenden
                gainNode.gain.setValueAtTime(0, currentTime);
                gainNode.gain.linearRampToValueAtTime(0.5, currentTime + 0.1);
                gainNode.gain.linearRampToValueAtTime(0, currentTime + note.duration);

                oscillator.start(currentTime);
                oscillator.stop(currentTime + note.duration);

                currentTime += note.duration;
            });
        }

        // Event-Listener für den Button
        document.getElementById('playButton').addEventListener('click', playMelody);

        const body = document.querySelector('body'); 

        const toggleButton = document.querySelector('.animation-toggle'); 

        let snowing = true; 

        let snowInterval; 

      (() => {
        let snowing = true;
        let snowInterval;

        function createSnowflake() { 

            const snowflake = document.createElement('div'); 

            snowflake.classList.add('snowflake'); 

            snowflake.style.left = Math.random() * window.innerWidth + 'px'; 

            snowflake.style.animationDuration = (3 + Math.random() * 5) + 's'; 

            snowflake.textContent = '❄'; 

            body.appendChild(snowflake); 

  

            setTimeout(() => { 

                snowflake.remove(); 

            }, 8000); 

        } 

  

        function startSnowfall() { 

            if (!snowInterval) { 

                snowInterval = setInterval(createSnowflake, 200); 

                console.log("Schneeflocken gestartet"); 

            } 

        } 

  

        function stopSnowfall() { 

            if (snowInterval) { 

                clearInterval(snowInterval); 

                snowInterval = null; 

                console.log("Schneeflocken angehalten"); 

            } 

        } 

  

        function toggleSnowfall() { 

            if (snowing) { 

                stopSnowfall(); 

                toggleButton.textContent = 'Schneeflocken starten'; 

            } else { 

                startSnowfall(); 

                toggleButton.textContent = 'Schneeflocken anhalten'; 

            } 

            snowing = !snowing; 

        } 

        })();

        startSnowfall(); // Schneeflocken beim Laden starten 
        window.toggleSnowfall = toggleSnowfall;
        

    </script> 
