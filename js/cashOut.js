
document.getElementById('btn-out')      
        .addEventListener('click', function(event){
            event.preventDefault();
     
            const outMoney = inputById('out-amount');
            const outPin = inputById('out-pin');
            
            if(outPin === 1234){
                const balance =textById('account-balance');
                const updateBalance = balance - outMoney;
                
                document.getElementById('account-balance')
                .innerText = updateBalance;
            }
            else{
                alert('Worng Pin')
            }




        })
