
document.getElementById('btn-out')      
        .addEventListener('click', function(event){
            event.preventDefault();
     
            const outMoney = inputById('out-amount');
            const outPin = inputById('out-pin');

            if(isNaN(outMoney)){
                alert('Failed to add Money');
                return;
            }
            
            if(outPin === 1234){
                const balance =textById('account-balance');

                if(outMoney > balance){
                    alert('Your account money is low');
                    return;
                }

                const updateBalance = balance - outMoney;
                
                document.getElementById('account-balance')
                .innerText = updateBalance;


                const div = document.createElement('div');
                div.classList.add('bg-blue-300');
                div.innerHTML =  `
                <h3 class="text-2xl font-bold text-center">Cash Out</h3>
                <p>Cash Out: ${outMoney}Tk. New Balance: ${updateBalance}Tk.</p>`
               

                document.getElementById('transetion-container').appendChild(div);


            }
            else{
                alert('Worng Pin')
            }




        })
