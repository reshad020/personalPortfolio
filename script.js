const blog = document.getElementById('blog');
const web = document.getElementById('web');
const photographer = document.getElementById('photographer')

document.getElementById('about-me-btn').addEventListener('click',function(){
    document.getElementById('full-animated-section').style=`
    display:block;
    animation: opacity 1s ;
    `
    document.getElementById('blog').style=`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    animation: self-intro 1s linear;
    `;
    setTimeout(function website(){
        web.style=`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        animation: self-intro 1s linear;
        
        `;
    },1100);
    setTimeout(function camera(){
        photographer.style=`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        animation: self-intro 1s linear;
    
    `;
    },2200);
    

})
document.getElementById('cross-btn').addEventListener('click',function(){
        // blog.style.display = "none";
        // web.style.display = "none";
        // photographer.style.display = "none";
        document.getElementById('full-animated-section').style.display="none";

})

