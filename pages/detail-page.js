function doesNotPassAllValidations(name, msg){
  if (!name && !msg ) {
      alert('Please enter a name and a message before submitting.')
      return true
  } else if (!name) {
      alert('Please enter a name before submitting.')
      return true
  } else if (!msg) {
      alert('Please enter a message before submitting.')
      return true
  } else if (msg.length > 300) {
      alert('Please keep your message to a maximum of 300 characters.')
      return true
  } else if (msg === 'inappropriate language'){
      alert('Please consider a more sophisticated wording.')
      return true
  }  else { 
      return false
  }
} 

function submitComment (){
  let inputField = document.getElementById('name')
      //   console.log(inputField)
  let name = inputField.value
      //   console.log(name)
  let bigName = name.charAt(0).toUpperCase() + name.slice(1)

        // gather data txtarea
  let txtInputField = document.getElementById('msg')
  const msg = txtInputField.value
  console.log(msg)

  if(doesNotPassAllValidations(bigName, msg)){
    return null
  } else {

        // create section element + store in variable  comment
  const comment = document.createElement('section')
        // create <h3> element + store in variable h3 
  const h3 = document.createElement('h3')
        // create <p> element + store in variable p
  const p = document.createElement('p')
  
        // reassign innerhtml property of h3 variable to value of '${name} said:'
  h3.innerHTML = `${bigName} said:`

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
}

      // function submitComment(){
      //   // gather data logic

      //   // check if user input passes validations
      //   if (doesNotPassAllValidations(name, msg)){
      //     return null
      //   }
      // }
