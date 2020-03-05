$(document).ready(function(){
    // include differents pages 
    // $('#footer').load("pages/includes/footer.html");

    $('#home').on('click',function(){
        $('#content').load('pages/home.html')
    })

    //select all the links
    var links = $('a');

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

    // open menu toggle

    $('.open-toogle').on('click',function(){
        $('.nav-mobile').css({
            display:'block'
        })
        $('.close-toogle').css({
            display: 'block'
        })
        $(this).css({
            display:'none'
        })
    })
    $('.nav-list__items').click(function(){
        $('.nav-mobile').css({
            display:'none'
        })
        $('.open-toogle').css({
            display: 'block'
        })
        $('.close-toogle').css({
            display:'none'
        })
    })

    $('.close-toogle').click(function(){
        $('.nav-mobile').css({
            display:'none'
        })
        $('.open-toogle').css({
            display: 'block'
        })
        $(this).css({
            display:'none'
        })
        
    })

    
})
