let name = document.getElementById("name")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let subject = document.getElementById("subject")
let message = document.getElementById("message")
let captcha = document.getElementById("captcha")

let vldName = document.getElementById("vld-name")
let vldEmail = document.getElementById("vld-email")
let vldPhone = document.getElementById("vld-phone")
let vldSubject = document.getElementById("vld-subject")
let vldMessage = document.getElementById("vld-message")
let vldCaptcha = document.getElementById("vld-captcha")

let inSending = false

let btnSendContact = document.getElementById("btnSendContact")

const clearValidations = () => {
  vldName.classList.add("d-none")
  vldEmail.classList.add("d-none")
  vldPhone.classList.add("d-none")
  vldSubject.classList.add("d-none")
  vldMessage.classList.add("d-none")
  vldCaptcha.classList.add("d-none")
}

const clearInputs = () => {
  name.value = ""
  email.value = ""
  phone.value = ""
  subject.value = ""
  message.value = ""
  captcha.value = ""
}

const readOnlyInputs = () => {
  name.readOnly = name.readOnly ? false : true
  email.readOnly = email.readOnly ? false : true
  phone.readOnly = phone.readOnly ? false : true
  subject.readOnly = subject.readOnly ? false : true
  message.readOnly = message.readOnly ? false : true
  captcha.readOnly = captcha.readOnly ? false : true
}

const namePrepared = (name) => {
  vldName.classList.remove("d-none")
  switch (true) {
    case name.length == "":
      vldName.innerText = "informe seu nome!"
      return false
    case name.length < 3:
      vldName.innerText = "nome muito curto!"
      return false
    case name.length > 40:
      vldName.innerText = "nome muito grande!"
      return false
  }
  vldName.classList.add("d-none")
  return true
}

const emailPrepared = (email) => {
  vldEmail.classList.remove("d-none")
  switch (true) {
    case email.length == "":
      vldEmail.innerText = "informe seu e-mail!"
      return false
    case email.length < 5:
      vldEmail.innerText = "esse e-mail é inválido!"
      return false
  }
  vldEmail.classList.add("d-none")
  return true
}

const phonePrepared = (phone) => {
  vldPhone.classList.remove("d-none")
  switch (true) {
    case phone.length == "":
      vldPhone.innerText = "informe seu telefone!"
      return false
    case phone.length < 10 || phone.length > 17:
      vldPhone.innerText = "número de telefone inválido!"
      return false
  }
  vldPhone.classList.add("d-none")
  return true
}

const subjectPrepared = (subject) => {
  vldSubject.classList.remove("d-none")
  switch (true) {
    case subject.length == "":
      vldSubject.innerText = "informe o assunto!"
      return false
  }
  vldSubject.classList.add("d-none")
  return true
}

const messagePrepared = (message) => {
  vldMessage.classList.remove("d-none")
  switch (true) {
    case message.length == "":
      vldMessage.innerText = "escreva sua mensagem!"
      return false
    case message.length < 5:
      vldMessage.innerText = "mensagem muito curta!"
      return false
    case message.length > 10000:
      vldMessage.innerText = "mensagem muito grande!"
      return false
  }
  vldMessage.classList.add("d-none")
  return true
}

const checkCaptcha =  (captcha) => {
  vldCaptcha.classList.remove("d-none")
  switch (true) {
    case captcha.length == "":
      vldCaptcha.innerText = "informe o captcha!"
      return false
    case captcha != 7:
      vldCaptcha.innerText = "captcha incorreto!"
      return false
  }
  vldCaptcha.classList.add("d-none")
  return true
}



const messageValidations = (name, email, phone, subject, message, captcha) => {
  if (
    namePrepared(name) &&
    emailPrepared(email) &&
    phonePrepared(phone) &&
    subjectPrepared(subject) &&
    messagePrepared(message) &&
    checkCaptcha(captcha)
  ) {
    return true
  } else false
}

function sendEmail() {

}

function sendEmail() {
  clearValidations()
  if (
    messageValidations(
      name.value,
      email.value,
      phone.value,
      subject.value,
      message.value,
      captcha.value
    ) === true &&
    !inSending
  ) {
    inSending = true
    readOnlyInputs()
 
    alert("Aguarde o envio do email!")
    return true
  
} 
 return false
}
