   $(document).ready(function() {
       $('#g-send').click(function() {
           let textMessage = document.querySelector('.gaming #w-input-text').innerText;
           //var text = $('#html').val();
           var cleanText = textMessage.replace(/(<([^>]+)>)/ig, "");

           if (cleanText !== " " && cleanText !== "" && cleanText !== null && cleanText !== "\n") {

               $('.g-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');

               $('.g-content').append('<div class=typing-indicator id=g-content-typing-indicator><span></span><span></span><span></span></div>');
               $('.g-content').stop().animate({ scrollTop: $('.g-content')[0].scrollHeight }, 1000);

               setTimeout(function() {
                   $('#g-content-typing-indicator').remove();

                   $('.g-content').append('<div class=backendChat><p>We have received your input! Would you like to elaborate more?</p></div>');
                   $('.g-content').append('<div class=typing-indicator id=g-content-typing-indicator><span></span><span></span><span></span></div>');

                   $('.g-content').stop().animate({ scrollTop: $('.g-content')[0].scrollHeight }, 1000);

                   setTimeout(function() {
                       $('#g-content-typing-indicator').remove();
                       $('.g-content').append('<div class=backendChat><p>If we implement your input, we might decide to reward you for the same! Kindly enter your name and contact details as well!</p></div>');
                       $('.g-content').stop().animate({ scrollTop: $('.g-content')[0].scrollHeight }, 1000);
                   }, 3000);

               }, 3000);
           }
           document.getElementsByClassName('g-content')[0].style.height = '90%';
           document.querySelector(".gaming .inputbar").style.height = '10%';
           document.querySelector('.gaming #w-input-text').innerText = "";
       });

       $('#m-send').click(function() {
           let textMessage = document.querySelector('.music #w-input-text').innerText;
           var cleanText = textMessage.replace(/(<([^>]+)>)/ig, "");

           if (cleanText !== " " && cleanText !== "" && cleanText !== null && cleanText !== "\n") {
               $('.m-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');

               $('.m-content').append('<div class=typing-indicator id=m-content-typing-indicator><span></span><span></span><span></span></div>');
               $('.m-content').stop().animate({ scrollTop: $('.m-content')[0].scrollHeight }, 1000);

               setTimeout(function() {
                   $('#m-content-typing-indicator').remove();

                   $('.m-content').append('<div class=backendChat><p>We have received your input! Would you like to elaborate more?</p></div>');
                   $('.m-content').append('<div class=typing-indicator id=m-content-typing-indicator><span></span><span></span><span></span></div>');

                   $('.m-content').stop().animate({ scrollTop: $('.m-content')[0].scrollHeight }, 1000);

                   setTimeout(function() {
                       $('#m-content-typing-indicator').remove();
                       $('.m-content').append('<div class=backendChat><p>If we implement your input, we might decide to reward you for the same! Kindly enter your name and contact details as well!</p></div>');
                       $('.m-content').stop().animate({ scrollTop: $('.m-content')[0].scrollHeight }, 1000);
                   }, 3000);

               }, 3000);
           }
           document.getElementsByClassName('m-content')[0].style.height = '90%';
           document.querySelector(".music .inputbar").style.height = '10%';
           document.querySelector('.music #w-input-text').innerText = "";
       });

       $('#ms-send').click(function() {
           let textMessage = document.querySelector('.movies #w-input-text').innerText;
           var cleanText = textMessage.replace(/(<([^>]+)>)/ig, "");

           if (cleanText !== " " && cleanText !== "" && cleanText !== null && cleanText !== "\n") {
               $('.ms-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');

               $('.ms-content').append('<div class=typing-indicator id=ms-content-typing-indicator><span></span><span></span><span></span></div>');
               $('.ms-content').stop().animate({ scrollTop: $('.ms-content')[0].scrollHeight }, 1000);

               setTimeout(function() {
                   $('#ms-content-typing-indicator').remove();

                   $('.ms-content').append('<div class=backendChat><p>We have received your input! Would you like to elaborate more?</p></div>');
                   $('.ms-content').append('<div class=typing-indicator id=ms-content-typing-indicator><span></span><span></span><span></span></div>');

                   $('.ms-content').stop().animate({ scrollTop: $('.ms-content')[0].scrollHeight }, 1000);

                   setTimeout(function() {
                       $('#ms-content-typing-indicator').remove();
                       $('.ms-content').append('<div class=backendChat><p>If we implement your input, we might decide to reward you for the same! Kindly enter your name and contact details as well!</p></div>');
                       $('.ms-content').stop().animate({ scrollTop: $('.ms-content')[0].scrollHeight }, 1000);
                   }, 3000);

               }, 3000);
           }
           document.getElementsByClassName('ms-content')[0].style.height = '90%';
           document.querySelector(".movies .inputbar").style.height = '10%';
           document.querySelector('.movies #w-input-text').innerText = "";
       });

       $('#a-send').click(function() {
           let textMessage = document.querySelector('.appliances #w-input-text').innerText;
           var cleanText = textMessage.replace(/(<([^>]+)>)/ig, "");

           if (cleanText !== " " && cleanText !== "" && cleanText !== null && cleanText !== "\n") {
               $('.a-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');
               $('.a-content').append('<div class=backendChat><p>We have received your input! Would you like to elaborate more?</p></div>');
               $('.a-content').append('<div class=backendChat><p>If we implement your input, we might decide to reward you for the same! Kindly enter your name and contact details as well!</p></div>');
               $('.a-content').stop().animate({ scrollTop: $('.a-content')[0].scrollHeight }, 1000);
           }
           document.getElementsByClassName('a-content')[0].style.height = '82%';
           document.querySelector(".appliances .inputbar").style.height = '10%';
           document.querySelector('.appliances #w-input-text').innerText = "";
       });

       $('#ac-send').click(function() {
           let textMessage = document.querySelector('.art #w-input-text').innerText;
           var cleanText = textMessage.replace(/(<([^>]+)>)/ig, "");

           if (cleanText !== " " && cleanText !== "" && cleanText !== null && cleanText !== "\n") {
               $('.ac-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');
               $('.ac-content').append('<div class=backendChat><p>We have received your input! Would you like to elaborate more?</p></div>');
               $('.ac-content').append('<div class=backendChat><p>If we implement your input, we might decide to reward you for the same! Kindly enter your name and contact details as well!</p></div>');
               $('.ac-content').stop().animate({ scrollTop: $('.ac-content')[0].scrollHeight }, 1000);
           }
           document.getElementsByClassName('ac-content')[0].style.height = '82%';
           document.querySelector(".art .inputbar").style.height = '10%';
           document.querySelector('.art #w-input-text').innerText = "";
       });

       $('#o-send').click(function() {
           let textMessage = document.querySelector('.others #w-input-text').innerText;
           var cleanText = textMessage.replace(/(<([^>]+)>)/ig, "");

           if (cleanText !== " " && cleanText !== "" && cleanText !== null && cleanText !== "\n") {
               $('.o-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');
               $('.o-content').append('<div class=backendChat><p>We have received your input! Would you like to elaborate more?</p></div>');
               $('.o-content').append('<div class=backendChat><p>If we implement your input, we might decide to reward you for the same! Kindly enter your name and contact details as well!</p></div>');
               $('.o-content').stop().animate({ scrollTop: $('.o-content')[0].scrollHeight }, 1000);
           }
           document.getElementsByClassName('o-content')[0].style.height = '82%';
           document.querySelector(".others .inputbar").style.height = '10%';
           document.querySelector('.others #w-input-text').innerText = "";
       });
       $('#v-send').click(function() {
           let textMessage = document.querySelector('.videos #w-input-text').innerText;
           var cleanText = textMessage.replace(/(<([^>]+)>)/ig, "");

           if (cleanText !== " " && cleanText !== "" && cleanText !== null && cleanText !== "\n") {
               $('.v-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');
               $('.v-content').append('<div class=backendChat><p>We have received your input! Would you like to elaborate more?</p></div>');
               $('.v-content').append('<div class=backendChat><p>If we implement your input, we might decide to reward you for the same! Kindly enter your name and contact details as well!</p></div>');
               $('.v-content').stop().animate({ scrollTop: $('.v-content')[0].scrollHeight }, 1000);
           }
           document.getElementsByClassName('v-content')[0].style.height = '82%';
           document.querySelector(".videos .inputbar").style.height = '10%';
           document.querySelector('.videos #w-input-text').innerText = "";
       });
       $('#technology-send').click(function() {
           let textMessage = document.querySelector('.technology #w-input-text').innerText;
           var cleanText = textMessage.replace(/(<([^>]+)>)/ig, "");

           if (cleanText !== " " && cleanText !== "" && cleanText !== null && cleanText !== "\n") {
               $('.tech-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');
               $('.tech-content').append('<div class=backendChat><p>We have received your input! Would you like to elaborate more?</p></div>');
               $('.tech-content').append('<div class=backendChat><p>If we implement your input, we might decide to reward you for the same! Kindly enter your name and contact details as well!</p></div>');
               $('.tech-content').stop().animate({ scrollTop: $('.tech-content')[0].scrollHeight }, 1000);
           }
           document.getElementsByClassName('tech-content')[0].style.height = '82%';
           document.querySelector(".technology .inputbar").style.height = '10%';
           document.querySelector('.technology #w-input-text').innerText = "";
       });
       $('#diy-crafts-send').click(function() {
           let textMessage = document.querySelector('.diy-crafts #w-input-text').innerText;
           var cleanText = textMessage.replace(/(<([^>]+)>)/ig, "");

           if (cleanText !== " " && cleanText !== "" && cleanText !== null && cleanText !== "\n") {
               $('.diy-crafts-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');
               $('.diy-crafts-content').append('<div class=backendChat><p>We have received your input! Would you like to elaborate more?</p></div>');
               $('.diy-crafts-content').append('<div class=backendChat><p>If we implement your input, we might decide to reward you for the same!</p></div>');
               $('.diy-crafts-content').append('<div class=backendChat><p>Kindly enter your name and contact details as well!</p></div>');
               $('.diy-crafts-content').stop().animate({ scrollTop: $('.diy-crafts-content')[0].scrollHeight }, 1000);
           }
           document.getElementsByClassName('diy-crafts-content')[0].style.height = '82%';
           document.querySelector(".diy-crafts .inputbar").style.height = '10%';
           document.querySelector('.diy-crafts #w-input-text').innerText = "";
       });
       $('#fashion-send').click(function() {
           let textMessage = document.querySelector('.fashion #w-input-text').innerText;
           var cleanText = textMessage.replace(/(<([^>]+)>)/ig, "");

           if (cleanText !== " " && cleanText !== "" && cleanText !== null && cleanText !== "\n") {
               $('.fashion-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');
               $('.fashion-content').append('<div class=backendChat><p>We have received your input! Would you like to elaborate more?</p></div>');
               $('.fashion-content').append('<div class=backendChat><p>If we implement your input, we might decide to reward you for the same! Kindly enter your name and contact details as well!</p></div>');
               $('.fashion-content').stop().animate({ scrollTop: $('.fashion-content')[0].scrollHeight }, 1000);
           }
           document.getElementsByClassName('fashion-content')[0].style.height = '82%';
           document.querySelector(".fashion .inputbar").style.height = '10%';
           document.querySelector('.fashion #w-input-text').innerText = "";
       });
       $('#apps-websites-send').click(function() {
           let textMessage = document.querySelector('.apps-websites #w-input-text').innerText;
           var cleanText = textMessage.replace(/(<([^>]+)>)/ig, "");

           if (cleanText !== " " && cleanText !== "" && cleanText !== null && cleanText !== "\n") {
               $('.apps-websites-content').append('<div class=userMessage><p>' + cleanText + '</p></div>');
               $('.apps-websites-content').append('<div class=backendChat><p>We have received your input! Would you like to elaborate more?</p></div>');
               $('.apps-websites-content').append('<div class=backendChat><p>If we implement your input, we might decide to reward you for the same! Kindly enter your name and contact details as well!</p></div>');
               $('.apps-websites-content').stop().animate({ scrollTop: $('.apps-websites-content')[0].scrollHeight }, 1000);
           }
           document.getElementsByClassName('apps-websites-content')[0].style.height = '82%';
           document.querySelector(".apps-websites .inputbar").style.height = '10%';
           document.querySelector('.apps-websites #w-input-text').innerText = "";
       });
   });
   /*var input = document.getElementById("message");
   input.addEventListener("keyup", function(event) {
       if (event.key === 13) {
           let textMessage = $('#message').val();
           var cleanText = textMessage.replace(/(<([^>]+)>)/ig, "");

           $('.content').append('<div class=userMessage><p>' + cleanText + '</p></div>');
           $('#message').val("");
       }
   });*/




   /*const openModalButtons = document.querySelectorAll('[data-modal-target]')
   const closeModalButtons = document.querySelectorAll('[data-close-button]')
   const overlay = document.getElementById('overlay')

   openModalButtons.forEach(button => {
       button.addEventListener('click', () => {
           const modal = document.querySelector(button.dataset.modalTarget)
           openModal(modal)
       })
   })

   overlay.addEventListener('click', () => {
       const modals = document.querySelectorAll('.modal.active')
       modals.forEach(modal => {
           closeModal(modal)
       })
   })

   closeModalButtons.forEach(button => {
       button.addEventListener('click', () => {
           const modal = button.closest('.modal')
           closeModal(modal)
       })
   })

   function openModal(modal) {
       if (modal == null) return
       modal.classList.add('active')
       overlay.classList.add('active')
   }

   function closeModal(modal) {
       if (modal == null) return
       modal.classList.remove('active')
       overlay.classList.remove('active')
   }*/