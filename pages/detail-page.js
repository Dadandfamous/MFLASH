

function submitComment (){
  // console.log('Hello!')
  let inputField = document.getElementById('name')
  console.log(inputField)
  let name = inputField.value
  console.log(name)

  // gather data txtarea
  let txtInputField = document.getElementById('msg')
  const msg = txtInputField.value
  console.log(msg)

  // create section element + store in variable  comment
  const comment = document.createElement('section')

  // create <h3> element + store in variable h3 

  const h3 = document.createElement('h3')
  // create <p> element + store in variable p
  const p = document.createElement('p')
  
  // reassign innerhtml property of h3 variable to value of '${name} said:'
  h3.innerHTML = `${name} said:`

  // reassign innerhtml property of p variable to value of 'msg'
  p.innerHTML = msg

  comment.classList.add("comment")

  // use appendChild-method on comment to add your h3 and p variables to it

  comment.appendChild(h3)
  comment.appendChild(p)

// display the elements on the page
  const commentSection = document.getElementById('comments')

commentSection.appendChild(comment)

inputField.value = null
txtInputField.value = null
}



