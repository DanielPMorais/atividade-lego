function handleSubmitAddPart(event){
    
    event.preventDefault()
    
    const part = event.target.imgSource.value
    const body = event.target.body.value
    
    const headRepository = document.querySelector('#headRepository')
    const bodyRepository = document.querySelector('#bodyRepository')
    const legRepository = document.querySelector('#legRepository')

    if(body==="Cabeça"){
    headRepository.innerHTML += `<img onclick="handleChosePart(event, 'headRepository')" class="part" src=${part} alt="cabeça lego" >`
    } else if(body==="Corpo"){
        bodyRepository.innerHTML += `<img onclick="handleChosePart(event, 'bodyRepository')" class="part" src=${part} alt="corpo lego" >`
    } else{
        legRepository.innerHTML += `<img onclick="handleChosePart(event, 'legRepository')" class="part" src=${part} alt="perna lego" >`
    }
}

function handleChosePart(event, repositoryId){
    const headChosed = document.querySelector('#headChosed img')
    const bodyChosed = document.querySelector('#bodyChosed img')
    const legChosed = document.querySelector('#legChosed img')

    const repository = document.querySelector(`#${repositoryId}`)
    const images = repository.querySelectorAll('.part')
    images.forEach(image => {
        image.classList.remove('active')
    })

    let clickedImage = event.target
    clickedImage.classList.add('active')

    if(clickedImage.alt === "cabeça lego"){
        headChosed.src = clickedImage.src
    }else if(clickedImage.alt === "corpo lego"){
        bodyChosed.src = clickedImage.src
    } else{
        legChosed.src = clickedImage.src
    }
}