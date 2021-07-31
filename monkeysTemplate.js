
    const elements = {
        allMonkeys: () => document.querySelector('.monkeys'),
    }

   Promise.all([
   getTemplate('./template.hbs'),
   getTemplate('./monkey.hbs')]).
   then(([templateSrc ,monkeySrc]) => {
    Handlebars.registerPartial('monkey', monkeySrc);
    let template = Handlebars.compile(templateSrc);
    let htmlView = template({monkeys});
    elements.allMonkeys().innerHTML = htmlView;
    attachEventListener();
   })
 

    function getTemplate(templateSource){
        return fetch(templateSource).then((res) => res.text());
    }

    function attachEventListener(){
        elements.allMonkeys().addEventListener('click', (e)=> {
            if(e.target.tagName != 'BUTTON'){
                return;
            }
            const styling = e.target.nextSibling.nextSibling;
            if(styling.style.display == 'block'){
                styling.style.display = 'none';
            } else {
                styling.style.display = 'block';
            }
            
        })
    }



