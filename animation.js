    <script> 

        console.log("JavaScript geladen!"); 

         

        const body = document.querySelector('body'); 

        const toggleButton = document.querySelector('.animation-toggle'); 

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

  

        startSnowfall(); // Schneeflocken beim Laden starten 

    </script> 
