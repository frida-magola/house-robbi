// window.addEventListener('load', ()=>{
//     if($('.slick-carousel').length > 0){
//         console.log('slick');
        
//     }
// })


$(document).ready(function(){
    // include differents pages 
    // $('#footer').load("pages/includes/footer.html");

    $('#home').on('click',function(){
        $('#content').load('pages/home.html')
    })

    //select all the links
    var links = $('a')

    $(links).each(function(index, item){
        if($(item).attr('id') == 'home'){
            $('#content').load('pages/home.html')
        }
        $(item).on('click', function(e){
            e.preventDefault()
            var content = e.target.dataset.content
            var id = e.target.id
            switch (id) {
                case 'home':
                    $('#content').load(content)  
                break;
                case 'contact':
                    $('#content').load(content)
                break;
            
                default:
                    $('#content').load(content);
                    break
            };
            
        })
    })
    
    // on scroll nav bar navigation
    $(window).on('scroll', function(){
        if($(this).scrollTop() >= 75){
            $('.header').css({
                background:'rgb(180,177,144)',
                
            })
            // $('.team-section__content figure figcaption h2').css({
            //     zIndex:'-1'
            // })
            // $('.form-container').css({
            //     zIndex:'unset'
            // })
        }else{
            $('.header').css({
                background:'unset'

            }) 
        }
    })

    // get current year
    function getCurrentYear(){
        var currentYear = new Date().getFullYear()
        $('#current_year').innerHtml = currentYear
    }
    getCurrentYear()

    
})
